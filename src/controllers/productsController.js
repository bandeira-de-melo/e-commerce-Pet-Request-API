import { productsCollection } from "../database/database.js";

export default async function productsController(req, res) {
    try {
        const products = await productsCollection.find().toArray()
        if(!products)return res.status(404).send("There are no products available.")
        res.status(200).send(products)
    } catch (err) {
        console.error(err)
        res.status(500).send("Error on the server side.")
    }
}