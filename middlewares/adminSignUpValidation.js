
import { preAdminsCollection } from "../database/database"

export const adminSignUpValidation = async (req, res, next)=> {
    const {username, password} = req.body

    if(!username || !password)return res.status(422).send("You must enter an admin username and passoword.")
    
    try {
        const adminIndb = await preAdminsCollection.findOne({username: username})
        if(!adminIndb) return res.status(401).send("Wrong username or password.")
        
        if(password !== adminIndb.password){
            return res.status(401).send("Wrong username or password.")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }
    
    next()
}