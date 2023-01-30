import Joi from "joi"

export const validateProduct = (schema)=>{
    return (req, res, next)=>{
        const product = res.locals.product

        const {error, value} = schema.validate(product, {abortEarly: false })
        if(error) return res.status(422).send(error.details.map(err => err))

        res.locals.product = value
        next()
    }
}
 