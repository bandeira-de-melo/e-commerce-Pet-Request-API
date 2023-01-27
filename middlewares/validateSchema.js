

export const validateSchema = async(schema)=>{
    return (req, res, next)=>{
        const data = req.body
        const {error, value} = schema.validate(data,{abortEarly: false})
        if(error){
            const errors = error.map(err => err)
            res.status(403).send("Please send data in correct format.")
        }
        res.local.value = value
        next()
    }
}