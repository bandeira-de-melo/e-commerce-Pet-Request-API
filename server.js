import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())



app.listen(process.env.PORT, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
})