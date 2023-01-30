import Joi from "joi"
export const validateProduct = (schema)=>{
    return (req, res, next)=>{
        const product = res.locals.product

        const {error, value} = Joi.validate(product, schema, {abortEarly: false })
        if(error) return res.status(422).send(error.details.map(err => err))

        res.locals.product = value
        next()
    }
}
 