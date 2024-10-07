import { Book } from "../models/bookModel.js"

export const getAllBooks = async (req, res) => {
    try{
        const books = await Book.find({})
        const booksCount = books.length
        res.status(200).send({count: booksCount, books})
    }catch(err){
        res.status(500).send({message: "Could not retrieve books, please try again"})
    }
}

export const createBook = async (req, res) => {
    try{
        const {title, author, publishYear} = req.body
        if(!title || !author || !publishYear)
            return res.status(400).send({message: "Please fill in all input fields"})
        const book = new Book(req.body)
        await book.save()
        return res.status(201).send({message: "Book created successfully"})
    }catch(err){
        return res.status(400).send({message: "Could not create book due to invalid inputs, please try again"})
    }
}

export const getBookById = async (req, res) => {
    try{
        if(!req.params.id)
            return res.status(500).send({message: "Please fill in the id"})
        const book = await Book.findById(req.params.id)
        if(!book)
            return res.status(404).send({message: "Book not found"})
        return res.status(200).send({book})
    }catch(err){
        return res.status(500).send({message: "There was a problem connecting to server, please try again"})
    }
}

export const updateBook = async (req, res) => {
    try{
        if(!req.params.id)
            return res.status(500).send({message: "Please fill in the id"})
        const {title, author, publishYear} = req.body
        if(!title || !author || !publishYear)
            return res.status(400).send({message: "Please input title, author and year"})
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        )
        return res.status(200).send({message: "Book updated succesfully", book})
    }catch(err){
        return res.status(500).send({message: "There was a problem connecting to server, please try again"})
    }
}

export const deleteBook = async (req, res) => {
    try{
        if(!req.params.id)
            return res.status(500).send({message: "Please fill in the id"})
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book)
            return res.status(404).send({message: "Book not found"})
        return res.status(200).send({message: "Book deleted succesfully"})
    }catch(err){
        return res.status(500).send({message: "There was a problem connecting to server, please try again"})
    }
}