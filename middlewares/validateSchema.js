

export const validateSchema = async(schema, data)=>{
    return (req, res, next)=>{
        const {error, value} = schema.validate(data,{abortEarly: false})
        if(error){
            const errors = error.map(err => err)
            res.status(403).send("Please send data in correct format.")
        }
        res.local.value = value
        next()
    }
}