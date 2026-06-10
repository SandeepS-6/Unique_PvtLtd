import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export const careerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  position: z.string().min(1),
  linkedin: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  experience: z.string().min(1),
  message: z.string().min(50),
});

export const quoteSchema = z.object({
  businessName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  website: z.string().optional(),
  industry: z.string().min(1),
  projectType: z.array(z.string()).min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  requirements: z.string().min(30),
  features: z.array(z.string()).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type CareerFormData = z.infer<typeof careerSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
