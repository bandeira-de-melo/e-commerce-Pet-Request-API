import dotenv from 'dotenv'
dotenv.config()

export default function adminSignUpValidation(req, res, next) {
    const {username, password} = req.body

    if(!username || !password)return res.status(422).send("You must enter an admin username and passoword.")

    if(username != process.env.ADMIN_USER && password != process.env.ADMIN_PASS){
        return res.status(401).send("Wrong username or password.")
    }

    next()
}