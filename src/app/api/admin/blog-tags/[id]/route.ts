import { NextRequest, NextResponse } from "next/server";

import { BlogTagService } from "@/services/blog-tag.service";
import { updateBlogTagSchema } from "@/validation/blog-tag";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * GET /api/admin/blog-tags/:id
 *
 * Get a single blog tag.
 */
export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Tag ID is required",
        },
        { status: 400 }
      );
    }

    const tag =
      await BlogTagService.getTagById(id);

    if (!tag) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog tag not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: tag,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Get blog tag error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog tag",
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/blog-tags/:id
 *
 * Update a blog tag.
 */
export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Tag ID is required",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const parsed =
      updateBlogTagSchema.safeParse(body);

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
      await BlogTagService.updateTag(
        id,
        parsed.data
      );

    return NextResponse.json(
      {
        success: true,
        message: "Blog tag updated successfully",
        data: tag,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Update blog tag error:",
      error
    );

    if (
      error instanceof Error &&
      error.message === "Tag not found"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog tag not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog tag",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/blog-tags/:id
 *
 * Delete a blog tag.
 */
export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Tag ID is required",
        },
        { status: 400 }
      );
    }

    await BlogTagService.deleteTag(id);

    return NextResponse.json(
      {
        success: true,
        message: "Blog tag deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Delete blog tag error:",
      error
    );

    if (
      error instanceof Error &&
      error.message === "Tag not found"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog tag not found",
        },
        { status: 404 }
      );
    }

    if (
      error instanceof Error &&
      error.message.includes(
        "being used by blogs"
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog tag",
      },
      { status: 500 }
    );
  }
}