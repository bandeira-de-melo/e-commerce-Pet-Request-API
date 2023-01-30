import { sessionsAdminCollection } from "../database/database.js"
import {v4 as uuidV4} from 'uuid'
import dayjs from "dayjs"

export const adminLoginController = async (req, res) =>{
    const userInAdmins = res.locals.adminInfo

    if(userInAdmins.isAdmin){
        
        const token = uuidV4()
        try {
            await sessionsAdminCollection.insertOne({userId: userInAdmins._id, token, createdAt: dayjs().format('HH:mm:ss') })
            res.status(200).send(token)
        } catch (err) {
            console.error(err)
            res.status(500).send("Error on the server side.")
        }
        
    } else {
        res.send("redirectUserSignUp")
    }
}