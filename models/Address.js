import mongoose from "mongoose"

const AddressSchema = new mongoose.Schema(
  {
    residentialAddress: {
      houseBlock: String,
      street: String,
      village: String,
      barangay: String,
      city: String,
      municipality: String,
      zipCode: String,
    },
    permanentAddress: {
      houseBlock: String,
      street: String,
      village: String,
      barangay: String,
      city: String,
      municipality: String,
      zipCode: String,
    },
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

export default mongoose.model("Address", AddressSchema)
