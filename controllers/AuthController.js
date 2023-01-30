import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { usersCollection, sessionsCollection } from "../database/database.js";


export async function signUp(req, res) {
    const { name, email, password } = req.body

    const alreadyInUse = await usersCollection.findOne({ email })
    if (alreadyInUse) return res.status(409).send("E-mail já cadastrado!")

    const passwordHashed = bcrypt.hashSync(password, 10);

    try {
        await usersCollection.insertOne({ name, email, password: passwordHashed })
        res.status(201).send("Usuário cadastrado com sucesso!")
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export async function signIn(req,res){
    const { email, password } = req.body

    try {

        const isUserExists = await usersCollection.findOne({ email })

        if (!isUserExists) return res.status(400).send("Dados incorretos!")

        const isPasswordMatches = bcrypt.compareSync(password, isUserExists.password)
        
        if (!isPasswordMatches) return res.status(400).send("Dados incorretos")


        const token = uuidV4();
        await sessionsCollection.insertOne({ idUsuario: isUserExists._id, token })

        return res.status(200).send({ token: token, name: isUserExists.name })

    } catch (error) {
        res.status(500).send(error.message)
    }
}
