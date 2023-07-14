import { model, Schema, Types } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
    {
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            ref: "User",
            required: true,
        },
        publicationDate: {
            type: Date,
            required: true,
        },
        reviews: {
            type: String,
            ref: "Review",
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Book = model<IBook, BookModel>('Book', bookSchema);
export default Book;
