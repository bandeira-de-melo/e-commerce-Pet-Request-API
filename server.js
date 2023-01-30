import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import adminsRouter from './routes/adminsRoutes.js';
import authRouter from './routes/AuthRoutes.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(adminsRouter)

app.use(authRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
})