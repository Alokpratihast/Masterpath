import { prisma } from "@/lib/prisma";

import {
  CreateBlogTagInput,
  UpdateBlogTagInput,
} from "@/types/blog-tag";

export class BlogTagService {
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
   * Create blog tag
   */
  static async createTag(
  data: CreateBlogTagInput
) {
  const slug =
    data.slug ||
    this.generateSlug(data.name);

  /**
   * Check whether tag slug already exists.
   */
  const existingTag =
    await prisma.tag.findUnique({
      where: {
        slug,
      },
    });

  if (existingTag) {
    throw new Error(
      "Blog tag with this slug already exists"
    );
  }

  return await prisma.tag.create({
    data: {
      name: data.name.trim(),
      slug,
    },
  });
}

  /**
   * Get all blog tags
   */
  static async getTags() {
    return await prisma.tag.findMany({
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
   * Get single blog tag
   */
  static async getTagById(
    id: string
  ) {
    return await prisma.tag.findUnique({
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
   * Update blog tag
   */
  static async updateTag(
    id: string,
    data: UpdateBlogTagInput
  ) {
    const existingTag =
      await prisma.tag.findUnique({
        where: {
          id,
        },
      });

    if (!existingTag) {
      throw new Error("Tag not found");
    }

    const updateData: {
      name?: string;
      slug?: string;
    } = {};

    if (data.name !== undefined) {
      updateData.name =
        data.name.trim();
    }

    /**
     * Slug is intentionally updated
     * only when explicitly provided.
     *
     * This prevents accidental SEO URL
     * changes when only the tag name changes.
     */
    if (data.slug !== undefined) {
      updateData.slug =
        data.slug.trim();
    }

    return await prisma.tag.update({
      where: {
        id,
      },

      data: updateData,
    });
  }

  /**
   * Delete blog tag
   */
  static async deleteTag(
    id: string
  ) {
    const existingTag =
      await prisma.tag.findUnique({
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

    if (!existingTag) {
      throw new Error("Tag not found");
    }

    /**
     * Prevent deleting a tag that is
     * currently being used by blogs.
     */
    if (existingTag._count.blogs > 0) {
      throw new Error(
        "Cannot delete tag because it is being used by blogs"
      );
    }

    return await prisma.tag.delete({
      where: {
        id,
      },
    });
  }
}