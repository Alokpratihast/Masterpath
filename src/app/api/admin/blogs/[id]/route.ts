import { NextRequest, NextResponse } from "next/server";

import { BlogService } from "@/services/blogs.service";
import { updateBlogSchema } from "@/validation/blogs";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * GET /api/admin/blogs/:id
 *
 * Get a single blog by ID.
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
          message: "Blog ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const blog = await BlogService.getBlogById(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: blog,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Get blog by ID error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * PUT /api/admin/blogs/:id
 *
 * Update a blog.
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
          message: "Blog ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const body = await request.json();

    const parsed = updateBlogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog validation failed",
          errors: parsed.error.issues,
        },
        {
          status: 400,
        }
      );
    }

    const blog = await BlogService.updateBlog(
      id,
      parsed.data
    );

    return NextResponse.json(
      {
        success: true,
        message: "Blog updated successfully",
        data: blog,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Update blog error:",
      error
    );

    if (
      error instanceof Error &&
      error.message === "Blog not found"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * DELETE /api/admin/blogs/:id
 *
 * Delete a blog.
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
          message: "Blog ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const existingBlog =
      await BlogService.getBlogById(id);

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    await BlogService.deleteBlog(id);

    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Delete blog error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog",
      },
      {
        status: 500,
      }
    );
  }
}