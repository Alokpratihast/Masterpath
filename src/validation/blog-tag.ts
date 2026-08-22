import { z } from "zod";

export const createBlogTagSchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      2,
      "Tag name must be at least 2 characters"
    )
    .max(
      100,
      "Tag name must not exceed 100 characters"
    ),

  slug: z
    .string()
    .trim()
    .min(
      2,
      "Tag slug must be at least 2 characters"
    )
    .max(
      120,
      "Tag slug must not exceed 120 characters"
    )
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers and hyphens"
    )
    .optional(),
});

export const updateBlogTagSchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      2,
      "Tag name must be at least 2 characters"
    )
    .max(
      100,
      "Tag name must not exceed 100 characters"
    )
    .optional(),

  slug: z
    .string()
    .trim()
    .min(
      2,
      "Tag slug must be at least 2 characters"
    )
    .max(
      120,
      "Tag slug must not exceed 120 characters"
    )
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers and hyphens"
    )
    .optional(),
});