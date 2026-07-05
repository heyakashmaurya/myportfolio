import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80),

  email: z
    .email("Please enter a valid email address."),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters.")
    .max(120),

  message: z
    .string()
    .trim()
    .min(20, "Message should be at least 20 characters.")
    .max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;