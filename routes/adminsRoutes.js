import { Router } from "express";
import { productIsertionController } from "../controllers/productInsertionController";
import { validateProductInsertion } from "../middlewares/validateProductInsertion";
import { productSchema } from "../schemas/productSchema";

const router = Router()


router.post("/insert-product", validateProductInsertion, productSchema, productIsertionController)
