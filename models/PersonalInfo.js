import mongoose from "mongoose"

const PersonalInfoSchema = new mongoose.Schema(
  {
    firstName: String,
    middleName: String,
    lastName: String,
    extension: String,
    birthDate: Date,
    placeBirth: String,
    sex: {
      type: String,
      enum: ["female", "male"],
    },
    civilStatus: String,
    height: String,
    width: String,
    bloodType: {
      type: String,
      enum: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
    },
    gsisID: String,
    pagibigID: String,
    philhealthID: String,
    sssID: String,
    tinNO: String,
    telephoneNo: String,
    mobileNo: String,
    emailAddress: String,
    employeeID: String,
    citizenship: {
      primary: { type: String, enum: ["filipino", "dual citizenship"] },
      secondary: {
        country: String,
        obtainedBy: {
          type: String,
          enum: ["birth", "naturalization"],
        },
      },
    },
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

export default mongoose.model("PersonalInfo", PersonalInfoSchema)
