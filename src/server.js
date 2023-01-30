import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

import productsRouter from './src/routes/productsRoutes.js';
import adminsRouter from './src/routes/adminsRouter.js';
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use([adminsRouter, productsRouter])


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
})