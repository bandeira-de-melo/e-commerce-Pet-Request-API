import joi from 'joi'

export const productSchema = joi.object({
    title: joi.string().min(3).required(),
    image: joi.string().min(7).required(),
    description: joi.string().min(8).required(),
    details: joi.array().items(joi.string()).required()
})