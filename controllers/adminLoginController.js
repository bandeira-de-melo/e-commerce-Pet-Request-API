import { sessionsAdminCollection } from "../database/database.js"

export const adminLoginController = async (req, res) =>{
    const userInAdmins = res.locals.adminInfo

    if(userInAdmins.isAdmin){
        token = uuidV4()
        try {
            await sessionsAdminCollection.insertOne({userId: userInAdmins._id, token, createdAt: dayjs().format('HH:mm:ss') })
            res.send(200).send(token)
        } catch (err) {
            console.error(err)
            res.status(500).send("Error on the server side.")
        }
        
    } else {
        res.send("redirectUserSignUp")
    }
}