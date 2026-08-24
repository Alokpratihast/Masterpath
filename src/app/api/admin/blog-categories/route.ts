import { NextRequest, NextResponse } from "next/server";

import { BlogCategoryService } from "@/services/blogCategory.service";
import { createBlogCategorySchema } from "@/validation/blogCategory";

/**
 * POST /api/admin/blog-categories
 *
 * Create a new blog category.
 */
export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const parsed =
      createBlogCategorySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Category validation failed",
          errors: parsed.error.issues,
        },
        {
          status: 400,
        }
      );
    }

    const category =
      await BlogCategoryService.createCategory(
        parsed.data
      );

    return NextResponse.json(
      {
        success: true,
        message: "Blog category created successfully",
        data: category,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Create blog category error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog category",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * GET /api/admin/blog-categories
 *
 * Get all blog categories.
 */
export async function GET() {
  try {
    const categories =
      await BlogCategoryService.getCategories();

    return NextResponse.json(
      {
        success: true,
        data: categories,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Get blog categories error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog categories",
      },
      {
        status: 500,
      }
    );
  }
}
