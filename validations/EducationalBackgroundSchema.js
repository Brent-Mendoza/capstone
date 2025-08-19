import z from "zod"

export const educationalBackgroundSchema = z.object({
  elementary: z
    .object({
      school: z.string().trim().optional(),
      course: z.string().trim().optional(),
      from: z.string().trim().optional(),
      to: z.string().trim().optional(),
      unitsEarned: z.string().trim().optional(),
      yearGraduated: z.string().trim().optional(),
      honors: z.string().trim().optional(),
    })
    .optional(),
  secondary: z
    .object({
      school: z.string().trim().optional(),
      course: z.string().trim().optional(),
      from: z.string().trim().optional(),
      to: z.string().trim().optional(),
      unitsEarned: z.string().trim().optional(),
      yearGraduated: z.string().trim().optional(),
      honors: z.string().trim().optional(),
    })
    .optional(),
  vocational: z
    .object({
      school: z.string().trim().optional(),
      course: z.string().trim().optional(),
      from: z.string().trim().optional(),
      to: z.string().trim().optional(),
      unitsEarned: z.string().trim().optional(),
      yearGraduated: z.string().trim().optional(),
      honors: z.string().trim().optional(),
    })
    .optional(),
  college: z
    .object({
      school: z.string().trim().optional(),
      course: z.string().trim().optional(),
      from: z.string().trim().optional(),
      to: z.string().trim().optional(),
      unitsEarned: z.string().trim().optional(),
      yearGraduated: z.string().trim().optional(),
      honors: z.string().trim().optional(),
    })
    .optional(),
  graduate: z
    .array(
      z.object({
        school: z.string().trim().optional(),
        course: z.string().trim().optional(),
        from: z.string().trim().optional(),
        to: z.string().trim().optional(),
        unitsEarned: z.string().trim().optional(),
        yearGraduated: z.string().trim().optional(),
        honors: z.string().trim().optional(),
      })
    )
    .optional(),
})
