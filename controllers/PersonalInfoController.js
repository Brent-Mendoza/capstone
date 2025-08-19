import PersonalInfo from "../models/PersonalInfo.js"
import { NotFoundError } from "../errors/CustomErrors.js"

export const updatePersonalInfo = async (req, res) => {
  const { id } = req.params
  const personalInfo = await PersonalInfo.findOneAndUpdate(
    { userID: id },
    req.body,
    {
      new: true,
    }
  )

  if (!personalInfo) throw new NotFoundError("Personal info not found")

  res.status(200).json({ message: "Info updated successfully!" })
}
