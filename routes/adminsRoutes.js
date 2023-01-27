import { Router } from "express";
import { productIsertionController } from "../controllers/productInsertionController";
import { adminSignUpValidation } from "../middlewares/adminSignUpValidation";
import { validateProductInsertion } from "../middlewares/validateProductInsertion";
import { productSchema } from "../schemas/productSchema";

const adminsRouter = Router()

adminsRouter.get('/admins-login')
adminsRouter.post('/admins-login')
adminsRouter.post("/admins-signup", adminSignUpValidation, )
adminsRouter.post("/insert-product", validateProductInsertion, validateProduct(productSchema), productIsertionController)

export default adminsRouter