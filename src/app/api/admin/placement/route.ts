import { NextRequest, NextResponse } from "next/server";

import { PlacementService } from "@/services/placement.service";
import type { PlacementApplicationStatus } from "@/types/placement";

const validStatuses: PlacementApplicationStatus[] = [
  "NEW",
  "REVIEWED",
  "SHORTLISTED",
  "REJECTED",
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const search = searchParams.get("search")?.trim() || undefined;
    const statusParam = searchParams.get("status");

    const page = pageParam ? Number(pageParam) : 1;
    const limit = limitParam ? Number(limitParam) : 10;

    // Validate page
    if (!Number.isInteger(page) || page < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Page must be a positive integer.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate limit
    if (
      !Number.isInteger(limit) ||
      limit < 1 ||
      limit > 50
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Limit must be between 1 and 50.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate status
    let status: PlacementApplicationStatus | undefined;

    if (statusParam) {
      if (
        !validStatuses.includes(
          statusParam as PlacementApplicationStatus
        )
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Invalid placement application status.",
          },
          {
            status: 400,
          }
        );
      }

      status =
        statusParam as PlacementApplicationStatus;
    }

    const result =
      await PlacementService.getApplications({
        page,
        limit,
        search,
        status,
      });

    return NextResponse.json(
      {
        success: true,
        data: result.applications,
        pagination: result.pagination,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Admin Placement Applications API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch placement applications.",
      },
      {
        status: 500,
      }
    );
  }
}