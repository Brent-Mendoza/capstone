import { Router } from "express"
import { validate } from "../middleware/ValidationMiddleware.js"
import { loginSchema, userSchema } from "../validations/UserSchema.js"
import { login, logout, register } from "../controllers/AuthController.js"

const AuthRouter = Router()

AuthRouter.post("/register", validate(userSchema), register)
AuthRouter.post("/login", validate(loginSchema), login)
AuthRouter.post("/logout", logout)

export default AuthRouter
