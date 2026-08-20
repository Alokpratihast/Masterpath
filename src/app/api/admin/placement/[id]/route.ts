import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

import { PlacementService } from "@/services/placement.service";

const updatePlacementSchema = z.object({
  status: z.enum([
    "NEW",
    "REVIEWED",
    "SHORTLISTED",
    "REJECTED",
  ]),
});

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * Update placement application status
 */
export async function PATCH(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Application ID is required.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const validatedData = updatePlacementSchema.parse(body);

    const application =
      await PlacementService.updateApplicationStatus(
        id,
        validatedData.status
      );

    return NextResponse.json({
      success: true,
      message: "Application status updated successfully.",
      data: application,
    });
  } catch (error) {
    console.error("UPDATE PLACEMENT ERROR:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid status.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to update application.",
      },
      { status: 500 }
    );
  }
}

/**
 * Delete placement application
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Application ID is required.",
        },
        { status: 400 }
      );
    }

    await PlacementService.deleteApplication(id);

    return NextResponse.json({
      success: true,
      message: "Placement application deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Placement Application Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Application not found or delete failed.",
      },
      { status: 404 }
    );
  }
}