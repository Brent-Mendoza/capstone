import { NotFoundError } from "../errors/CustomErrors.js"
import FamilyBackground from "../models/FamilyBackground.js"
export const updateFamilyBackground = async (req, res) => {
  const { id } = req.params
  const familyBackground = FamilyBackground.findOneAndUpdate(
    { userID: id },
    req.body,
    { new: true }
  )

  if (!familyBackground) throw new NotFoundError("Family Background not found")

  res.status(200).json({ message: "Family Background updated successfully!" })
}
