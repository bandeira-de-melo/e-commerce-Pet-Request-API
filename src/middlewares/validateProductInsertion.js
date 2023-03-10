import { sessionsAdminCollection, adminsCollection } from "../database/database.js"
export const validateProductInsertion = async (req, res, next)=>{
    
    const product = req.body
    if(!product) return res.status(422).send("You must send a json object by req body")
    const {authorization} = req.headers
    
    if(!authorization) return res.status(422).send("A bearer token must be sent by request headers")
    const token = authorization.replace("Bearer ", "")
    let adminInfo;

    try {
        const adminSession = await sessionsAdminCollection.findOne({token})
        if(!adminSession) return res.status(404).send("Session with given token not found.")
        const admin = await adminsCollection.findOne({adminId: adminSession.adminId})
        if(!admin) res.status(404).send("Admin not found on database.")
        adminInfo = admin
    } catch (error) {
        console.error(error)
        res.status(500).send("Error on the server side")
    }
    res.locals.adminInfo = adminInfo
    res.locals.product = product
    next()
}