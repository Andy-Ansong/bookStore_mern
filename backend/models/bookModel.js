import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Book = mongoose.model("Book", bookSchema)
