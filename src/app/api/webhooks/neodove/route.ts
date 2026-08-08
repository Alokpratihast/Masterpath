import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // 1. Verify NeoDove webhook secret
    const secret = request.headers.get("x-neodove-secret");

    if (
      !secret ||
      secret !== process.env.NEODOVE_WEBHOOK_SECRET
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized webhook request.",
        },
        { status: 401 }
      );
    }

    // 2. Read webhook payload
    const payload = await request.json();

    console.log(
      "========== NEODOVE WEBHOOK =========="
    );

    console.log(
      JSON.stringify(payload, null, 2)
    );

    console.log(
      "====================================="
    );

    // 3. Extract required NeoDove fields
    const {
      campaign_id,
      campaign_name,
      lead_id,
      mobile,
      name,
      email,
      lead_stage_name,
      dispose_remark,
    } = payload;

    // 4. Validate required fields
    if (!campaign_id || !lead_id || !name) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Missing required NeoDove lead information.",
        },
        { status: 400 }
      );
    }

    const neoDoveCampaignId =
      String(campaign_id);

    const neoDoveLeadId =
      String(lead_id);

    // ------------------------------------------------
    // 5. Find existing Campaign
    // ------------------------------------------------

    let campaign =
      await prisma.campaign.findUnique({
        where: {
          neoDoveCampaignId,
        },
      });

    // ------------------------------------------------
    // 6. Create Campaign if it doesn't exist
    // ------------------------------------------------

    if (!campaign) {
      const campaignName =
        campaign_name ||
        `NeoDove Campaign ${neoDoveCampaignId}`;

      const slugBase = campaignName
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      const slug =
        `${slugBase}-${neoDoveCampaignId}`;

      campaign =
        await prisma.campaign.create({
          data: {
            name: campaignName,
            slug,
            neoDoveCampaignId,
            isActive: true,
          },
        });

      console.log(
        "NeoDove Campaign Created:",
        campaign.id
      );
    }

    // ------------------------------------------------
    // 7. Check if Lead already exists
    // ------------------------------------------------

    const existingLead =
      await prisma.lead.findUnique({
        where: {
          neoDoveLeadId,
        },
      });

    // ------------------------------------------------
    // 8. Existing Lead → UPDATE
    // ------------------------------------------------

    if (existingLead) {
      const updatedLead =
        await prisma.lead.update({
          where: {
            id: existingLead.id,
          },

          data: {
            fullName: name,

            phone:
              mobile || existingLead.phone,

            email:
              email || existingLead.email,

            campaignId: campaign.id,

            remarks:
              dispose_remark ||
              existingLead.remarks,
          },
        });

      console.log(
        "NeoDove Lead Updated:",
        updatedLead.id
      );

      return NextResponse.json(
        {
          success: true,
          message:
            "NeoDove lead already existed and was updated.",
          data: {
            leadId: updatedLead.id,
            campaignId: campaign.id,
            duplicate: true,
          },
        },
        { status: 200 }
      );
    }

    // ------------------------------------------------
    // 9. New Lead → CREATE
    // ------------------------------------------------

    const newLead =
      await prisma.lead.create({
        data: {
          neoDoveLeadId,

          fullName: name,

          phone: mobile || null,

          email: email || null,

          type: "ADMISSION",

          campaignId: campaign.id,

          source: "NEODOVE",

          status: "NEW",

          remarks:
            dispose_remark ||
            lead_stage_name ||
            null,
        },
      });

    console.log(
      "NeoDove Lead Created:",
      newLead.id
    );

    // ------------------------------------------------
    // 10. Success response
    // ------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "NeoDove lead saved successfully.",
        data: {
          leadId: newLead.id,
          campaignId: campaign.id,
          duplicate: false,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "NeoDove Webhook Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to process NeoDove webhook.",
      },
      { status: 500 }
    );
  }
}