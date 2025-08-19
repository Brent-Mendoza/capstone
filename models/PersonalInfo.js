import mongoose from "mongoose"
import crypto from "crypto"
import * as dotenv from "dotenv"
dotenv.config()

const algorithm = "aes-256-cbc"

const secretKey = Buffer.from(process.env.ENCRYPTION_KEY, "hex") // must be 32 bytes

function encrypt(text) {
  const iv = crypto.randomBytes(16) // new IV per value
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv)
  let encrypted = cipher.update(text, "utf-8", "hex")
  encrypted += cipher.final("hex")
  return `${iv.toString("hex")}:${encrypted}`
}

function decrypt(text) {
  const [ivHex, encrypted] = text.split(":")
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(ivHex, "hex")
  )
  let decrypted = decipher.update(encrypted, "hex", "utf8")
  decrypted += decipher.final("utf8")
  return decrypted
}

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
    gsisID: {
      type: String,
      set: (value) => (value ? encrypt(value) : value),
      get: (value) => (value ? decrypt(value) : value),
    },
    pagibigID: {
      type: String,
      set: (value) => (value ? encrypt(value) : value),
      get: (value) => (value ? decrypt(value) : value),
    },
    philhealthID: {
      type: String,
      set: (value) => (value ? encrypt(value) : value),
      get: (value) => (value ? decrypt(value) : value),
    },
    tinNO: {
      type: String,
      set: (value) => (value ? encrypt(value) : value),
      get: (value) => (value ? decrypt(value) : value),
    },
    telephoneNo: {
      type: String,
      set: (value) => (value ? encrypt(value) : value),
      get: (value) => (value ? decrypt(value) : value),
    },
    mobileNo: {
      type: String,
      set: (value) => (value ? encrypt(value) : value),
      get: (value) => (value ? decrypt(value) : value),
    },
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

PersonalInfoSchema.set("toJSON", { getters: true })
PersonalInfoSchema.set("toObject", { getters: true })

export default mongoose.model("PersonalInfo", PersonalInfoSchema)
