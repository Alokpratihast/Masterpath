import { prisma } from "@/lib/prisma";

import {
  CreateBlogCategoryInput,
  UpdateBlogCategoryInput,
} from "@/types/blogCategory";

export class BlogCategoryService {
  /**
   * Generate SEO-friendly slug
   */
  private static generateSlug(
    value: string
  ): string {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  /**
   * Create blog category
   */
  static async createCategory(
    data: CreateBlogCategoryInput
  ) {
    const slug =
      data.slug ||
      this.generateSlug(data.name);

    return await prisma.category.create({
      data: {
        name: data.name.trim(),

        slug,

        description:
          data.description?.trim() || null,
      },
    });
  }

  /**
   * Get all blog categories
   */
  static async getCategories() {
    return await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },

      include: {
        _count: {
          select: {
            blogs: true,
          },
        },
      },
    });
  }

  /**
   * Get single blog category
   */
  static async getCategoryById(
    id: string
  ) {
    return await prisma.category.findUnique({
      where: {
        id,
      },

      include: {
        _count: {
          select: {
            blogs: true,
          },
        },
      },
    });
  }

  /**
   * Update blog category
   */
  static async updateCategory(
    id: string,
    data: UpdateBlogCategoryInput
  ) {
    const existingCategory =
      await prisma.category.findUnique({
        where: {
          id,
        },
      });

    if (!existingCategory) {
      throw new Error("Category not found");
    }

    const updateData: {
      name?: string;
      slug?: string;
      description?: string | null;
    } = {};

    if (data.name !== undefined) {
      updateData.name =
        data.name.trim();
    }

    if (data.slug !== undefined) {
      updateData.slug =
        data.slug.trim();
    }

    if (data.description !== undefined) {
      updateData.description =
        data.description.trim() || null;
    }

    return await prisma.category.update({
      where: {
        id,
      },

      data: updateData,
    });
  }

  /**
   * Delete blog category
   */
  static async deleteCategory(
    id: string
  ) {
    const existingCategory =
      await prisma.category.findUnique({
        where: {
          id,
        },

        include: {
          _count: {
            select: {
              blogs: true,
            },
          },
        },
      });

    if (!existingCategory) {
      throw new Error("Category not found");
    }

    /**
     * Prevent deleting a category
     * which is currently used by blogs.
     */
    if (
      existingCategory._count.blogs > 0
    ) {
      throw new Error(
        "Cannot delete category because it is being used by blogs"
      );
    }

    return await prisma.category.delete({
      where: {
        id,
      },
    });
  }
}