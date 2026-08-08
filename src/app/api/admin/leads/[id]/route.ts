import { NextRequest, NextResponse } from "next/server";

import { LeadService } from "@/services/lead.service";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

/**
 * GET Lead By Id
 */
export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const lead =
      await LeadService.getLeadById(id);

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead fetched successfully.",
        data: lead,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * PATCH Lead Status
 */
export async function PATCH(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const { status } = body;

    if (
      !["NEW", "CONTACTED", "CLOSED"].includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid status.",
        },
        {
          status: 400,
        }
      );
    }

    const updatedLead =
      await LeadService.updateLeadStatus(
        id,
        status
      );

    return NextResponse.json(
      {
        success: true,
        message: "Lead status updated successfully.",
        data: updatedLead,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update lead.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * DELETE Lead
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    await LeadService.deleteLead(id);

    return NextResponse.json(
      {
        success: true,
        message: "Lead deleted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete lead.",
      },
      {
        status: 500,
      }
    );
  }
}