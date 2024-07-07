// src/schemas/project.schemas.ts

import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1).max(255),
  link: z.string().url().max(255),
  willPay: z.boolean(),
  license: z.string().min(1).max(255),
  domain: z.enum(["Web", "Android","Machine Learning","Data Science","Flutter"]),
  languages: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  maintainers: z.array(z.string().min(1)),
  userId: z.string(), 
});
