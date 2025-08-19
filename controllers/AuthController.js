import User from "../models/User.js"
import { comparePassword, hashPassword } from "../utils/PasswordHashing.js"
import { UnauthenticatedError } from "../errors/CustomErrors.js"
import { createJWT } from "../utils/token.js"
import PersonalInfo from "../models/PersonalInfo.js"
import Address from "../models/Address.js"
import FamilyBackground from "../models/FamilyBackground.js"
import EducationalBackground from "../models/EducationalBackground.js"

export const register = async (req, res) => {
  try {
    const isFirstAccount = (await User.countDocuments()) === 0
    req.body.role = isFirstAccount ? "admin" : "user"

    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashedPassword

    const user = await User.create(req.body)

    if (!isFirstAccount) {
      await PersonalInfo.create({
        userID: user._id,
        emailAddress: user.email,
      })

      await Address.create({
        userID: user._id,
      })

      await FamilyBackground.create({
        userID: user._id,
      })

      await EducationalBackground.create({
        userID: user._id,
      })
    }

    res.status(201).json({ message: "User Created Successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user) throw new UnauthenticatedError("Invalid Credentials")
  const isPasswordCorret = await comparePassword(
    req.body.password,
    user.password
  )
  if (!isPasswordCorret) throw new UnauthenticatedError("Invalid Credentials")
  const token = createJWT({ userId: user._id, role: user.role })
  const oneDay = 1000 * 60 * 60 * 24
  res.cookie("user-token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: false,
  })

  res.status(200).json({ message: "User logged in successfully" })
}

export const logout = async (req, res) => {
  res.cookie("user-token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  })

  res.status(200).json({ message: "User logged out successfully" })
}
