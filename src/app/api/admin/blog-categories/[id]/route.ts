import { NextRequest, NextResponse } from "next/server";

import { BlogCategoryService } from "@/services/blogCategory.service";
import { updateBlogCategorySchema } from "@/validation/blogCategory";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * GET /api/admin/blog-categories/:id
 *
 * Get a single blog category.
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
          message: "Category ID is required",
        },
        { status: 400 }
      );
    }

    const category =
      await BlogCategoryService.getCategoryById(id);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: category,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Get blog category error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog category",
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/blog-categories/:id
 *
 * Update a blog category.
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
          message: "Category ID is required",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const parsed =
      updateBlogCategorySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Category validation failed",
          errors: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const category =
      await BlogCategoryService.updateCategory(
        id,
        parsed.data
      );

    return NextResponse.json(
      {
        success: true,
        message: "Blog category updated successfully",
        data: category,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Update blog category error:",
      error
    );

    if (
      error instanceof Error &&
      error.message === "Category not found"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog category",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/blog-categories/:id
 *
 * Delete a blog category.
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
          message: "Category ID is required",
        },
        { status: 400 }
      );
    }

    await BlogCategoryService.deleteCategory(id);

    return NextResponse.json(
      {
        success: true,
        message: "Blog category deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Delete blog category error:",
      error
    );

    if (
      error instanceof Error &&
      error.message === "Category not found"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog category not found",
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
        message: "Failed to delete blog category",
      },
      { status: 500 }
    );
  }
}