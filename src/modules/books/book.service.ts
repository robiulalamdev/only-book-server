import { IBook } from "./book.interface";
import Book from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {
    const newBook = new Book(book);
    const createdBook = await newBook.save();
    return createdBook;
};



export const BookService = {
    createBook,
    // getAllCowsByPagination,
    // getCows,
    // getSingleCowById,
    // updateCowById,
    // deleteCowById,
};