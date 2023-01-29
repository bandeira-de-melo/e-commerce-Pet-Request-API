import Joi from "joi";

export const adminSignUp = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(2).required(),
    password: Joi.string().min(6).required(),
    confirm_password: Joi.ref('password')
})

export const adminLogin = Joi.object({
    name:Joi.string().min(2).required(),
    password: Joi.string().min(6).required()
})