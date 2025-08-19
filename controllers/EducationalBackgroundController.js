import EducationalBackground from "../models/EducationalBackground.js"
import { NotFoundError } from "../errors/CustomErrors.js"
export const updateEducationalBackground = async (req, res) => {
  const { id } = req.params
  const educationalBackground = EducationalBackground.findOneAndUpdate(
    { userID: id },
    req.body,
    { new: true }
  )

  if (!educationalBackground)
    throw new NotFoundError("Educational Background not found")

  res
    .status(200)
    .json({ message: "Educational Background updated successfully!" })
}
