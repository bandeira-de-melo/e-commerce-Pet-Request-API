import { Router } from "express";
import productsController from "../controllers/productsController.js";



const productsRouter = Router()

productsRouter.get("/home", productsController)

export default productsRouter