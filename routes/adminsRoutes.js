import { Router } from "express";
import { productIsertionController } from "../controllers/productInsertionController";
import { validateProductInsertion } from "../middlewares/validateProductInsertion";
import { productSchema } from "../schemas/productSchema";

const adminsRouter = Router()


adminsRouter.post("/admins-signup")
adminsRouter.post("/insert-product", validateProductInsertion, validateProduct(productSchema), productIsertionController)

export default adminsRouter