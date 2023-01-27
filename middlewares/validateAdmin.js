import { adminsCollection } from "../database/database"


export const validateAdmin = async(req, res, next)=>{
    const {username, password} = req.body
    if(!username || !password)return res.status(422).send("You must enter an admin username and passoword.")
    
    let userInAdmins;
    
    try {
        userInAdmins = await adminsCollection.findOne({password: password})
        if(!userInAdmins) return res.status(401).send("Wrong username or password.")
        res.status(200).send("Logged in successfully.")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side.")
    }
    delete userInAdmins.password
    res.locals.adminInfo = userInAdmins
    next()
}   