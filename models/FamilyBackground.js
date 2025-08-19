import mongoose from "mongoose"

const FamilyBackgroundSchema = new mongoose.Schema(
  {
    spouse: {
      firstName: String,
      middleName: String,
      lastName: String,
      extension: String,
      occupation: String,
      businessName: String,
      businessAddress: String,
      telNo: String,
    },
    father: {
      firstName: String,
      middleName: String,
      lastName: String,
      extension: String,
    },
    mother: {
      madienName: String,
      firstName: String,
      middleName: String,
      lastName: String,
    },
    children: [
      {
        name: String,
        birthDate: Date,
      },
    ],
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

export default mongoose.model("FamilyBackground", FamilyBackgroundSchema)
