import { NextResponse } from "next/server";

import { DashboardService } from "@/services/dashboard.service";

export async function GET() {
  try {
    const dashboard =
      await DashboardService.getDashboardStats();

    return NextResponse.json(
      {
        success: true,
        message: "Dashboard data fetched successfully.",
        data: dashboard,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Dashboard API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard data.",
      },
      {
        status: 500,
      }
    );
  }
}