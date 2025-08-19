import z from "zod"

export const addressSchema = z.object({
  residentialAddress: z
    .object({
      houseBlock: z.string().trim().optional(),
      street: z.string().trim().optional(),
      village: z.string().trim().optional(),
      barangay: z.string().trim().optional(),
      city: z.string().trim().optional(),
      municipality: z.string().trim().optional(),
      zipCode: z.string().trim().optional(),
    })
    .optional(),
  permanentAddress: z
    .object({
      houseBlock: z.string().trim().optional(),
      street: z.string().trim().optional(),
      village: z.string().trim().optional(),
      barangay: z.string().trim().optional(),
      city: z.string().trim().optional(),
      municipality: z.string().trim().optional(),
      zipCode: z.string().trim().optional(),
    })
    .optional(),
})
