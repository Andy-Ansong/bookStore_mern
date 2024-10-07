import express from "express"
import {db} from "./database/db.js"
import cors from "cors"
import bookRouter from "./routers/bookRouter.js"

const port = 5555
const app = express()

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//     allowedHeaders: ['Content-Type']
// }))
app.use(cors())
app.use(express.json())
app.use("/api/v1/books", bookRouter)

app.get("/", (req, res) => {
    res.send("Backend is running")
})

app.listen(port, () => {
    console.log("Server is running on: ", port)
})