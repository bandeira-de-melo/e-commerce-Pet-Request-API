import { ObjectId } from "mongodb"
import { cartCollection } from "../database/database"
import { purchesesCollection } from "../database/database"
import dayjs from "dayjs"

export async function handleCheckout(req, res) {
    const cardInfo = req.body
    const { session } = res.locals
    const date = dayjs().format('MMM D, YYYY h:mm A')


    try {
        const { totalValue } = cartCollection.findOne({ _id: session.userId }).toArray()

        const converted = Number(totalValue).toFixed(2)

        purchesesCollection.insertOne({
            value: converted,
            cardInfo,
            date,
            userId: new ObjectId(session._id)
        })

        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
    }
}
