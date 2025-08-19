import z from "zod"

export const personalInfoSchema = z.object({
  firstName: z.string().trim().optional(),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  extension: z.string().trim().optional(),
  birthDate: z.date().optional(),
  placeBirth: z.string().trim().optional(),
  sex: z.enum(["male", "female"]).optional(),
  civilStatus: z.string().trim().optional(),
  height: z.string().trim().optional(),
  width: z.string().trim().optional(),
  bloodType: z
    .enum(["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"])
    .optional(),
  gsisID: z.string().trim().optional(),
  pagibigID: z.string().trim().optional(),
  philhealthID: z.string().trim().optional(),
  sssID: z.string().trim().optional(),
  tinNO: z.string().trim().optional(),
  telephoneNo: z.string().trim().optional(),
  mobileNo: z.string().trim().optional(),
  emailAddress: z.email().optional(),
  employeeID: z.string().trim().optional(),
  citizenship: z
    .object({
      primary: z.enum(["filipino", "dual citizenship"]).optional(),
      secondary: z
        .object({
          country: z.string().trim().optional(),
          obtainedBy: z.enum(["birth", "naturalization"]).optional(),
        })
        .optional(),
    })
    .refine(
      (data) => {
        if (data.primary === "dual citizenship") {
          return data.secondary?.country && data.secondary?.obtainedBy
        }
        return true
      },
      {
        message: "Secondary citizenship info is required for dual citizenship",
        path: ["secondary"],
      }
    )
    .optional(),
})
