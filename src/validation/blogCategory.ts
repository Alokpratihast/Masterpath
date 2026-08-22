import { z } from "zod";

export const createBlogCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      2,
      "Category name must be at least 2 characters"
    )
    .max(
      100,
      "Category name must not exceed 100 characters"
    ),

  slug: z
    .string()
    .trim()
    .min(
      2,
      "Category slug must be at least 2 characters"
    )
    .max(
      120,
      "Category slug must not exceed 120 characters"
    )
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers and hyphens"
    )
    .optional(),

  description: z
    .string()
    .trim()
    .max(
      1000,
      "Description must not exceed 1000 characters"
    )
    .optional(),
});

export const updateBlogCategorySchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(
        2,
        "Category name must be at least 2 characters"
      )
      .max(
        100,
        "Category name must not exceed 100 characters"
      )
      .optional(),

    slug: z
      .string()
      .trim()
      .min(
        2,
        "Category slug must be at least 2 characters"
      )
      .max(
        120,
        "Category slug must not exceed 120 characters"
      )
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug must contain only lowercase letters, numbers and hyphens"
      )
      .optional(),

    description: z
      .string()
      .trim()
      .max(
        1000,
        "Description must not exceed 1000 characters"
      )
      .optional(),
  });