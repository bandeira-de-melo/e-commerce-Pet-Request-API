

export const validateSchema = (schema)=>{
    return (req, res, next)=>{
        const data = req.body
        const {error, value} = schema.validate(data,{abortEarly: false})
        if(error){
            const errors = error.details.map(err => err)
            console.log(errors)
            return res.status(403).send("Please send data in correct format.")
        }
        res.locals.value = value
        next()
    }
}