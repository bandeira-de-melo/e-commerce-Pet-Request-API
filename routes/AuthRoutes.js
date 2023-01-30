import { signIn, signUp } from "../controllers/AuthController.js";
import { Router } from "express";
import { usuarioSchema, loginSchema } from "../schemas/AuthSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const authRouter = Router()

authRouter.post("/sign-up", validateSchema(usuarioSchema), signUp)
authRouter.post("/sign-in", validateSchema(loginSchema), signIn)

export default authRouter