import { Router } from "express";
import { productIsertionController } from "../controllers/productInsertionController.js";
import { adminSignUpValidation } from "../../middlewares/adminSignUpValidation.js";
import { validateAdmin } from "../../middlewares/validateAdmin.js";
import { validateProductInsertion } from "../../middlewares/validateProductInsertion.js";
import { validateSchema } from "../../middlewares/validateSchema.js";
import { validateProduct } from "../../middlewares/validateProduct.js";
import { adminLogin } from "../schemas/adminsSchemas.js";
import { productSchema } from "../schemas/productSchema.js";
import { cardSchema } from "../schemas/creditCardSchema.js";
import { listCart } from "../controllers/cartController.js";
import { handleCheckout } from "../controllers/checkoutController.js";

const adminsRouter = Router()

adminsRouter.get('/admins-login')
adminsRouter.post('/admins-login', validateAdmin, validateSchema(adminLogin))
adminsRouter.post("/admins-signup", adminSignUpValidation,)
adminsRouter.post("/insert-product", validateProductInsertion, validateProduct(productSchema), productIsertionController)
adminsRouter.get("/cart", listCart)
adminsRouter.post("/checkout", validateSchema(cardSchema), handleCheckout)

export default adminsRouter