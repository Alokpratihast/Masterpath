import { NextRequest, NextResponse } from "next/server";

import { BlogTagService } from "@/services/blog-tag.service";
import { createBlogTagSchema } from "@/validation/blog-tag";

/**
 * POST /api/admin/blog-tags
 *
 * Create a new blog tag.
 */
export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const parsed =
      createBlogTagSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Tag validation failed",
          errors: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const tag =
      await BlogTagService.createTag(
        parsed.data
      );

    return NextResponse.json(
      {
        success: true,
        message: "Blog tag created successfully",
        data: tag,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Create blog tag error:",
      error
    );

    /**
     * Duplicate slug
     */
    if (
      error instanceof Error &&
      error.message ===
        "Blog tag with this slug already exists"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A blog tag with this slug already exists",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog tag",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/admin/blog-tags
 *
 * Get all blog tags.
 */
export async function GET() {
  try {
    const tags =
      await BlogTagService.getTags();

    return NextResponse.json(
      {
        success: true,
        data: tags,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Get blog tags error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog tags",
      },
      { status: 500 }
    );
  }
}