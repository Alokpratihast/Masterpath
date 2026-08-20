import { z } from "zod";

export const placementApplicationSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters.")
    .max(100, "Full name cannot exceed 100 characters."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .regex(
      /^[0-9]{10}$/,
      "Phone number must be exactly 10 digits."
    ),

  courseSlug: z.string().optional(),

  courseName: z.string().optional(),
});

export type PlacementApplicationFormInput = z.infer<
  typeof placementApplicationSchema
>;