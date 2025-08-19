import express from "express"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import AuthRouter from "./routes/auth.js"
import errorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware.js"
import PDSRouter from "./routes/pds.js"
import { authenticateUser } from "./middleware/AuthMiddleware.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", AuthRouter)
app.use("/api/v1/pds", authenticateUser, PDSRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

try {
  await mongoose.connect(process.env.MONGO_URL)

  app.listen(port, () => {
    console.log("server running...")
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
