import { productsCollection } from "../database/database"
import dayjs from "dayjs"

export const productIsertionController = async (req, res)=>{
    const adminInfo = res.locals.adminInfo
    const product = res.locals.product
    try {
        await productsCollection.insertOne({
            title: product.title,
            image: product.image,
            description: product.description,
            details: product.details,
            adminId: adminInfo.adminId,
            createdAt: dayjs().format('MMM D, YYYY h:mm A')
        })
        res.status(201).send("Product added to the DB successfully.")
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}