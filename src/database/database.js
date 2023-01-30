import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
    console.log("Connected to Mongodb.")
} catch (err) {
    console.log(err)
}

const db = mongoClient.db()

export const usersCollection = db.collection('users')
export const productsCollection = db.collection('products')
export const sessionsAdminCollection = db.collection('sessions-admin')
export const adminsCollection = db.collection('admins')
export const preAdminsCollection = db.collection('preAdmins')
export const cartCollection = db.collection('cart')
export const purchesesCollection = db.collection('purcheses')
