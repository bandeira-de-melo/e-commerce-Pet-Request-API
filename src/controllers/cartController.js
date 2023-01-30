import { cartCollection } from "../database/database"

export async function listCart(req, res) {
    const { session } = res.locals
    console.log(session)

    try {
        const cart = await cartCollection
            .find({ _id: session.userId }).toArray()

        let totalValue = 0;

        cart.map((prod) => totalValue += prod.value)

        const cartData = {...cart, totalValue}

        return res.status(200).send(cartData)
    } catch (err) {
        res.sendStatus(500)
    }
}
