import { NextRequest, NextResponse } from "next/server";

import { LeadService } from "@/services/lead.service";
import { contactSchema } from "@/validation/contact";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request
    const validatedData = contactSchema.parse(body);

    // Save contact lead into Lead table
    const lead = await LeadService.createContactLead(
      validatedData
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        data: lead,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    // Validation error
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

    // Internal server error
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