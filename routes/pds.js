import { Router } from "express"
import { validate, validateParams } from "../middleware/ValidationMiddleware.js"
import { personalInfoSchema } from "../validations/PersonalSchema.js"
import { IdParamSchema } from "../validations/IdParamsSchema.js"
import { updatePersonalInfo } from "../controllers/PersonalInfoController.js"
import { updateAddress } from "../controllers/AddressController.js"
import { updateEducationalBackground } from "../controllers/EducationalBackgroundController.js"
import { updateFamilyBackground } from "../controllers/FamilyBackgroundController.js"
import { addressSchema } from "../validations/AddressSchema.js"
import { educationalBackgroundSchema } from "../validations/EducationalBackgroundSchema.js"
import { familyBackgroundSchema } from "../validations/FamilyBackgroundSchema.js"
const PDSRouter = Router()

PDSRouter.patch(
  "/personal-info/:id",
  validateParams(IdParamSchema),
  validate(personalInfoSchema),
  updatePersonalInfo
)

PDSRouter.patch(
  "/address/:id",
  validateParams(IdParamSchema),
  validate(addressSchema),
  updateAddress
)
PDSRouter.patch(
  "/educational-background/:id",
  validateParams(IdParamSchema),
  validate(educationalBackgroundSchema),
  updateEducationalBackground
)
PDSRouter.patch(
  "/family-background/:id",
  validateParams(IdParamSchema),
  validate(familyBackgroundSchema),
  updateFamilyBackground
)

export default PDSRouter
