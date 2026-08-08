import { NextRequest, NextResponse } from "next/server";

import { AUTH_COOKIE_NAME } from "@/lib/cookies";
import { JwtService } from "@/lib/jwt";
import { AdminService } from "@/services/admin.service";

export async function GET(request: NextRequest) {
  try {
    // Read authentication cookie
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        {
          status: 401,
        }
      );
    }

    // Verify JWT
    const payload = await JwtService.verifyToken(token);

    // Fetch current admin
    const admin = await AdminService.getAdminById(
      payload.adminId
    );

    return NextResponse.json(
      {
        success: true,
        data: admin,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Current Admin API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized.",
      },
      {
        status: 401,
      }
    );
  }
}