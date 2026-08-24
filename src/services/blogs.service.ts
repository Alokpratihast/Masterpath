import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";

import {
  CreateBlogInput,
  UpdateBlogInput,
} from "@/validation/blogs";

import {
  BlogListParams,
} from "@/types/blog";

export class BlogService {
  /**
   * Create a new blog
   *
   * Creates:
   * - Blog
   * - Tags if they do not already exist
   * - BlogTag relations
   *
   * Everything happens inside one transaction.
   */
  static async createBlog(data: CreateBlogInput) {
    return await prisma.$transaction(
      async (tx) => {
      /**
       * Create the main blog
       */
      const blog = await tx.blog.create({
        data: {
          title: data.title,
          slug: data.slug,

          excerpt: data.excerpt || null,
          content: data.content,

          featuredImage:
            data.featuredImage || null,

          featuredImageAlt:
            data.featuredImageAlt || null,

          ogImage:
            data.ogImage || null,

          authorId:
            data.authorId || null,

          categoryId:
            data.categoryId || null,

          status: data.status,

          publishedAt:
            data.status === "PUBLISHED"
              ? data.publishedAt ?? new Date()
              : null,

          seoTitle:
            data.seoTitle || null,

          seoDescription:
            data.seoDescription || null,

          focusKeyword:
            data.focusKeyword || null,

          canonicalUrl:
            data.canonicalUrl || null,

          noIndex: data.noIndex,

          noFollow: data.noFollow,
        },
      });

      /**
       * Handle tags
       */
      if (data.tags && data.tags.length > 0) {
        const uniqueTags = [
          ...new Set(
            data.tags
              .map((tag) => tag.trim().toLowerCase())
              .filter(Boolean)
          ),
        ];

        for (const tagName of uniqueTags) {
          /**
           * Convert tag name into URL-friendly slug
           *
           * Example:
           * "Next JS" → "next-js"
           */
          const tagSlug = tagName
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

          /**
           * Find existing tag or create a new one
           */
          const tag = await tx.tag.upsert({
            where: {
              slug: tagSlug,
            },

            update: {},

            create: {
              name: tagName,
              slug: tagSlug,
            },
          });

          /**
           * Create Blog ↔ Tag relation
           */
          await tx.blogTag.create({
            data: {
              blogId: blog.id,
              tagId: tag.id,
            },
          });
        }
      }

      /**
 * Return complete blog with relations
 */
return await tx.blog.findUnique({
  where: {
    id: blog.id,
  },

  include: {
    author: {
      select: {
        id: true,
        fullName: true,
        email: true,
      },
    },

    category: true,

    tags: {
      include: {
        tag: true,
      },
    },
  },
});
    },
    {
      maxWait: 10000,
      timeout: 15000,
    }
  );
}


  /**
   * Get paginated blogs
   *
   * Supports:
   * - Pagination
   * - Search
   * - Status filter
   * - Category filter
   */
  static async getBlogs({
    page = 1,
    limit = 10,
    search,
    status,
    categoryId,
  }: BlogListParams = {}) {
    /**
     * Normalize pagination
     */
    const currentPage = Math.max(
      1,
      Math.floor(page)
    );

    const pageSize = Math.min(
      50,
      Math.max(1, Math.floor(limit))
    );

    const skip =
      (currentPage - 1) * pageSize;

    /**
     * Normalize search
     */
    const searchValue = search?.trim();

    /**
     * Build Prisma where condition
     */
    const where: Prisma.BlogWhereInput = {
      ...(status
        ? {
            status,
          }
        : {}),

      ...(categoryId
        ? {
            categoryId,
          }
        : {}),

      ...(searchValue
        ? {
            OR: [
              {
                title: {
                  contains: searchValue,
                },
              },

              {
                slug: {
                  contains: searchValue,
                },
              },

              {
                excerpt: {
                  contains: searchValue,
                },
              },
            ],
          }
        : {}),
    };

    /**
     * Fetch blogs and total count together
     */
    const [blogs, total] =
      await prisma.$transaction([
        prisma.blog.findMany({
          where,

          skip,

          take: pageSize,

          orderBy: {
            createdAt: "desc",
          },

          include: {
            author: {
              select: {
                id: true,
                fullName: true,
              },
            },

            category: true,

            tags: {
              include: {
                tag: true,
              },
            },
          },
        }),

        prisma.blog.count({
          where,
        }),
      ]);

    /**
     * Calculate pagination
     */
    const totalPages = Math.ceil(
      total / pageSize
    );

    return {
      blogs,

      pagination: {
        page: currentPage,
        limit: pageSize,
        total,
        totalPages,

        hasNextPage:
          currentPage < totalPages,

        hasPreviousPage:
          currentPage > 1,
      },
    };
  }

  /**
   * Get a blog by ID
   *
   * Used mainly by Admin CMS.
   */
  static async getBlogById(id: string) {
    return await prisma.blog.findUnique({
      where: {
        id,
      },

      include: {
        author: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },

        category: true,

        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  /**
   * Get published blog by slug
   *
   * Used by public website.
   *
   * Draft blogs will never be returned.
   */
  static async getBlogBySlug(slug: string) {
    return await prisma.blog.findFirst({
      where: {
        slug,

        status: "PUBLISHED",
      },

      include: {
        author: {
          select: {
            id: true,
            fullName: true,
          },
        },

        category: true,

        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  /**
   * Update blog
   *
   * Supports:
   * - Content update
   * - SEO update
   * - Category update
   * - Author update
   * - Publishing status
   * - Tags replacement
   */
  static async updateBlog(
  id: string,
  data: UpdateBlogInput
) {
  return await prisma.$transaction(
    async (tx) => {
      /**
       * Check if blog exists
       */
      const existingBlog =
        await tx.blog.findUnique({
          where: {
            id,
          },
        });

      if (!existingBlog) {
        throw new Error("Blog not found");
      }

      /**
       * Strongly typed Prisma update object
       */
      const updateData: Prisma.BlogUpdateInput =
        {};

      /**
       * Basic content
       */
      if (data.title !== undefined) {
        updateData.title = data.title;
      }

      if (data.slug !== undefined) {
        updateData.slug = data.slug;
      }

      if (data.excerpt !== undefined) {
        updateData.excerpt =
          data.excerpt || null;
      }

      if (data.content !== undefined) {
        updateData.content = data.content;
      }

      /**
       * Images
       */
      if (data.featuredImage !== undefined) {
        updateData.featuredImage =
          data.featuredImage || null;
      }

      if (
        data.featuredImageAlt !== undefined
      ) {
        updateData.featuredImageAlt =
          data.featuredImageAlt || null;
      }

      if (data.ogImage !== undefined) {
        updateData.ogImage =
          data.ogImage || null;
      }

      /**
       * Author relation
       */
      if (data.authorId !== undefined) {
        updateData.author = data.authorId
          ? {
              connect: {
                id: data.authorId,
              },
            }
          : {
              disconnect: true,
            };
      }

      /**
       * Category relation
       */
      if (data.categoryId !== undefined) {
        updateData.category =
          data.categoryId
            ? {
                connect: {
                  id: data.categoryId,
                },
              }
            : {
                disconnect: true,
              };
      }

      /**
       * SEO
       */
      if (data.seoTitle !== undefined) {
        updateData.seoTitle =
          data.seoTitle || null;
      }

      if (
        data.seoDescription !== undefined
      ) {
        updateData.seoDescription =
          data.seoDescription || null;
      }

      if (
        data.focusKeyword !== undefined
      ) {
        updateData.focusKeyword =
          data.focusKeyword || null;
      }

      if (
        data.canonicalUrl !== undefined
      ) {
        updateData.canonicalUrl =
          data.canonicalUrl || null;
      }

      if (data.noIndex !== undefined) {
        updateData.noIndex =
          data.noIndex;
      }

      if (data.noFollow !== undefined) {
        updateData.noFollow =
          data.noFollow;
      }

      /**
       * Status
       */
      if (data.status !== undefined) {
        updateData.status =
          data.status;
      }

      /**
       * Publishing date
       */
      if (data.status === "PUBLISHED") {
        updateData.publishedAt =
          data.publishedAt ??
          existingBlog.publishedAt ??
          new Date();
      }

      /**
       * If blog goes back to draft,
       * remove publishedAt.
       */
      if (data.status === "DRAFT") {
        updateData.publishedAt = null;
      }

      /**
       * Update main blog
       */
      await tx.blog.update({
        where: {
          id,
        },

        data: updateData,
      });

      /**
       * Update tags only when tags
       * are actually provided.
       *
       * undefined → keep existing tags
       * []        → remove all tags
       */
      if (data.tags !== undefined) {
        /**
         * Remove old relations
         */
        await tx.blogTag.deleteMany({
          where: {
            blogId: id,
          },
        });

        /**
         * Normalize and remove duplicates
         */
        const uniqueTags = [
          ...new Set(
            data.tags
              .map((tag) =>
                tag.trim().toLowerCase()
              )
              .filter(Boolean)
          ),
        ];

        /**
         * Create/connect new tags
         */
        for (const tagName of uniqueTags) {
          const tagSlug = tagName
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

          const tag =
            await tx.tag.upsert({
              where: {
                slug: tagSlug,
              },

              update: {},

              create: {
                name: tagName,
                slug: tagSlug,
              },
            });

          await tx.blogTag.create({
            data: {
              blogId: id,
              tagId: tag.id,
            },
          });
        }
      }

      /**
       * Return updated blog
       * with all relations.
       */
      return await tx.blog.findUnique({
        where: {
          id,
        },

        include: {
          author: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },

          category: true,

          tags: {
            include: {
              tag: true,
            },
          },
        },
      });
    },
    {
      maxWait: 10000,
      timeout: 15000,
    }
  );
}

  /**
   * Delete blog
   *
   * BlogTag relations are automatically
   * deleted because BlogTag has
   * onDelete: Cascade.
   */
  static async deleteBlog(id: string) {
    return await prisma.blog.delete({
      where: {
        id,
      },
    });
  }
}
