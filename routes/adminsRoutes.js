import { Router } from "express";
import { productIsertionController } from "../controllers/productInsertionController";
import { adminSignUpValidation } from "../middlewares/adminSignUpValidation";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateProductInsertion } from "../middlewares/validateProductInsertion";
import { validateSchema } from "../middlewares/validateSchema";
import { adminLogin } from "../schemas/adminsSchemas";
import { productSchema } from "../schemas/productSchema";

const adminsRouter = Router()

adminsRouter.get('/admins-login')
adminsRouter.post('/admins-login', validateAdmin, validateSchema(adminLogin) )
adminsRouter.post("/admins-signup", adminSignUpValidation, )
adminsRouter.post("/insert-product", validateProductInsertion, validateProduct(productSchema), productIsertionController)

export default adminsRouter