import { NextRequest, NextResponse } from "next/server";

import { LeadService } from "@/services/lead.service";
import { leadSchema } from "@/validation/lead";
import { ZodError } from "zod";

/**
 * Create a new admission lead
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate Request
    const validatedData = leadSchema.parse(body);

    // Save Lead
    const lead = await LeadService.createLead(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully.",
        data: lead,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error("Lead API Error:", error);

    // Validation Error
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

    // Internal Server Error
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}