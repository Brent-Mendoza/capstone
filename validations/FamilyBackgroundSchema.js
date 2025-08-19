import z from "zod"

export const familyBackgroundSchema = z.object({
  spouse: z
    .object({
      firstName: z.string().trim().optional(),
      middleName: z.string().trim().optional(),
      lastName: z.string().trim().optional(),
      extension: z.string().trim().optional(),
      occupation: z.string().trim().optional(),
      businessName: z.string().trim().optional(),
      businessAddress: z.string().trim().optional(),
      telNo: z.string().trim().optional(),
    })
    .optional(),
  father: z
    .object({
      firstName: z.string().trim().optional(),
      middleName: z.string().trim().optional(),
      lastName: z.string().trim().optional(),
      extension: z.string().trim().optional(),
    })
    .optional(),
  mother: z
    .object({
      madienName: z.string().trim().optional(),
      firstName: z.string().trim().optional(),
      middleName: z.string().trim().optional(),
      lastName: z.string().trim().optional(),
    })
    .optional(),
  children: z
    .array(
      z.object({
        name: z.string().trim().optional(),
        birthDate: z.date().optional(),
      })
    )
    .optional(),
})
