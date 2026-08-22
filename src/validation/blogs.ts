import { z } from "zod";

const baseBlogSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Blog title must be at least 5 characters")
    .max(200, "Blog title must not exceed 200 characters"),

  slug: z
    .string()
    .trim()
    .min(3, "Slug must be at least 3 characters")
    .max(200, "Slug must not exceed 200 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers and hyphens"
    ),

  excerpt: z
    .string()
    .trim()
    .max(500, "Excerpt must not exceed 500 characters")
    .optional()
    .or(z.literal("")),

  content: z
    .string()
    .trim()
    .min(20, "Blog content must be at least 20 characters"),

  featuredImage: z
    .string()
    .url("Featured image must be a valid URL")
    .optional()
    .or(z.literal("")),

  featuredImageAlt: z
    .string()
    .trim()
    .max(200, "Image alt text must not exceed 200 characters")
    .optional()
    .or(z.literal("")),

  ogImage: z
    .string()
    .url("OG image must be a valid URL")
    .optional()
    .or(z.literal("")),

  authorId: z
    .string()
    .optional()
    .or(z.literal("")),

  categoryId: z
    .string()
    .optional()
    .or(z.literal("")),

  tags: z
    .array(z.string().trim().min(1))
    .optional()
    .default([]),

  status: z
    .enum(["DRAFT", "PUBLISHED"])
    .default("DRAFT"),

  publishedAt: z
    .coerce
    .date()
    .optional()
    .nullable(),

  seoTitle: z
    .string()
    .trim()
    .max(200, "SEO title must not exceed 200 characters")
    .optional()
    .or(z.literal("")),

  seoDescription: z
    .string()
    .trim()
    .max(500, "SEO description must not exceed 500 characters")
    .optional()
    .or(z.literal("")),

  focusKeyword: z
    .string()
    .trim()
    .max(100, "Focus keyword must not exceed 100 characters")
    .optional()
    .or(z.literal("")),

  canonicalUrl: z
    .string()
    .url("Canonical URL must be a valid URL")
    .optional()
    .or(z.literal("")),

  noIndex: z
    .boolean()
    .default(false),

  noFollow: z
    .boolean()
    .default(false),
});

export const createBlogSchema = baseBlogSchema;

export const updateBlogSchema = baseBlogSchema.partial();

export type CreateBlogInput = z.infer<
  typeof createBlogSchema
>;

export type UpdateBlogInput = z.infer<
  typeof updateBlogSchema
>;