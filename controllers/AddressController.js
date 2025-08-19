import Address from "../models/Address.js"
import { NotFoundError } from "../errors/CustomErrors.js"
export const updateAddress = async (req, res) => {
  const { id } = req.params
  const address = await Address.findOneAndUpdate({ userID: id }, req.body, {
    new: true,
  })

  if (!address) throw new NotFoundError("Address not found")

  res.status(200).json({ message: "Address updated successfully!" })
}
