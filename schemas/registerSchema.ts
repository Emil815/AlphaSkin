import { z } from "zod";


const phoneNumber = z.string().refine((val) => val, {
  message: "Phone is required",
});

export const registerSchema = z
  .object({
    phoneNumber,
    name: z.unknown().optional(),
    surname: z.unknown().optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // set the error on the confirmPassword field
  });
