import { model, Schema } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
    {
        image: {
            type: String,
            required: true,
        },
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
        publicationYear: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Book = model<IBook, BookModel>('Book', bookSchema);
export default Book;
