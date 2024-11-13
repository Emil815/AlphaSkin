import { z } from "zod";


const phoneNumber = z.string().refine((val) => val, {
  message: "Phone is required",
});

export const loginSchema = z.object({
  phoneNumber,
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
