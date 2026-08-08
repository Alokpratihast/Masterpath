import { NextResponse } from "next/server";

import { LeadService } from "@/services/lead.service";

export async function GET() {
  try {
    const leads = await LeadService.getAllLeads();

    return NextResponse.json(
      {
        success: true,
        message: "Leads fetched successfully.",
        data: leads,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Leads API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads.",
      },
      {
        status: 500,
      }
    );
  }
}