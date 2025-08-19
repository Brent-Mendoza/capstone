import z from "zod"
import User from "../models/User.js"

export const userSchema = z.object({
  email: z
    .email("Invalid email format")
    .min(1, "Email is required")
    .refine(
      async (email) => {
        const user = await User.findOne({ email })
        return !user
      },
      { message: "Email already exists" }
    ),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(5, "Password must be at least 5 characters long"),
})

export const loginSchema = z.object({
  email: z.email("Invalid email format").min(1, "Email is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(5, "Password must be at least 5 characters long"),
})
