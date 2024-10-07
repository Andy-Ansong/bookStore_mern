import mongoose from "mongoose";
import * as dotenv from "dotenv"
dotenv.config()

console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("connected to database successfully")
}).catch(() => {
    console.log("failed to connect to database")
})

export const db = mongoose.connection
