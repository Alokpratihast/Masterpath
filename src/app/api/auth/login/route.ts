import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { AuthService } from "@/services/auth.service";
import { CookieService } from "@/lib/cookies";
import { loginSchema } from "@/validation/auth.validation";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request
    const validatedData = loginSchema.parse(body);

    // Authenticate admin
    const result = await AuthService.login(validatedData);

    // Create response
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        data: {
          admin: result.admin,
        },
      },
      {
        status: 200,
      }
    );

    // Set HTTP-only authentication cookie
    CookieService.setAuthCookie(response, result.token);

    return response;
  } catch (error) {
    console.error("Login API Error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}