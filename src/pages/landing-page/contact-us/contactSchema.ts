import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactSchemaType = z.infer<typeof contactFormSchema>;
