import mongoose from "mongoose"

const EducationalBackgroundSchema = new mongoose.Schema(
  {
    elementary: {
      school: String,
      course: String,
      from: String,
      to: String,
      unitsEarned: String,
      yearGraduated: String,
      honors: String,
    },
    secondary: {
      school: String,
      course: String,
      from: String,
      to: String,
      unitsEarned: String,
      yearGraduated: String,
      honors: String,
    },
    vocational: {
      school: String,
      course: String,
      from: String,
      to: String,
      unitsEarned: String,
      yearGraduated: String,
      honors: String,
    },
    college: {
      school: String,
      course: String,
      from: String,
      to: String,
      unitsEarned: String,
      yearGraduated: String,
      honors: String,
    },
    graduate: [
      {
        school: String,
        course: String,
        from: String,
        to: String,
        unitsEarned: String,
        yearGraduated: String,
        honors: String,
      },
    ],
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

export default mongoose.model(
  "EducationalBackground",
  EducationalBackgroundSchema
)
