import express from "express"
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/bookController.js"

const bookRouter = express.Router()

bookRouter.get("/", getAllBooks)

bookRouter.post("/", createBook)

bookRouter.get("/:id", getBookById)

bookRouter.put("/:id", updateBook)

bookRouter.delete("/:id", deleteBook)

export default bookRouter