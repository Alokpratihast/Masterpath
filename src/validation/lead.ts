import { z } from "zod";

export const leadSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters.")
    .max(100, "Full name cannot exceed 100 characters."),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number cannot exceed 15 digits."),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),

  courseSlug: z
    .string()
    .min(1, "Course slug is required."),

  courseName: z
    .string()
    .min(1, "Course name is required."),
});

export type LeadInput = z.infer<typeof leadSchema>;