import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import imagekit from "@/lib/imagekit";
import { PlacementService } from "@/services/placement.service";
import { placementApplicationSchema } from "@/validation/placement";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const courseSlug = formData.get("courseSlug");
    const courseName = formData.get("courseName");
    const resume = formData.get("resume");

    // Validate text fields
    const validatedData = placementApplicationSchema.parse({
      fullName,
      email,
      phone,
      courseSlug:
        typeof courseSlug === "string"
          ? courseSlug
          : undefined,
      courseName:
        typeof courseName === "string"
          ? courseName
          : undefined,
    });

    // Validate resume exists
    if (!(resume instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume is required.",
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume size must not exceed 5 MB.",
        },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(resume.type)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Only PDF, DOC, and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const buffer = Buffer.from(
      await resume.arrayBuffer()
    );

    // Upload resume to ImageKit
    const uploadResponse =
      await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: resume.name,
        folder: "/placement-resumes",
      });

    // Save application in database
    const application =
      await PlacementService.createApplication({
        ...validatedData,
        resumeUrl: uploadResponse.url,
        resumeName: resume.name,
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your placement application has been submitted successfully.",
        data: application,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Placement Application API Error:",
      error
    );

    // Zod validation error
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
        message:
          "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}