import { SortOrder } from "mongoose";
import { IBook, IBookFilter } from "./book.interface";
import Book from "./book.model";
import { bookSearchableFields } from "./book.constant";
import { paginationHelpers } from "../../helpers/paginationHelper";
import { IGenericResponse } from "../../interfaces/common";
import { IPaginationOptions } from "../../interfaces/pagination";

const createBook = async (book: IBook): Promise<IBook | null> => {
    const newBook = new Book(book);
    const createdBook = await newBook.save();
    return createdBook;
};



// get all cows
const getBooks = async (): Promise<IBook[]> => {
    const books = await Book.find({}).populate('publisher', "email").sort({ _id: -1 });
    return books;
};


// get all cows by pagination
const getAllBooksByPagination = async (
    filters: IBookFilter,
    paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
    const { searchTerm, ...filtersData } = filters;
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(paginationOptions);

    const andConditions = [];

    if (searchTerm) {
        andConditions.push({
            $or: bookSearchableFields.map(field => {
                const condition: Record<string, unknown> = {};
                condition[field] = {
                    $regex: searchTerm,
                    $options: 'i',
                };
                return condition;
            }),
        });
    }


    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => {
                if (field === "publicationDate") {
                    return {
                        [field]: value,
                    };
                }
                else {
                    return {
                        [field]: { $regex: value, $options: 'i' },
                    };
                }
            }),
        });
    }

    const sortConditions: { [key: string]: SortOrder } = {};

    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }

    const whereConditions =
        andConditions.length > 0 ? { $and: andConditions } : {};

    const result = await Book.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);

    const total = await Book.countDocuments();

    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};




// get single book
const getBook = async (id: string): Promise<IBook | null> => {
    const book = await Book.findOne({ _id: id }).populate('publisher', "email name ");
    return book;
};



// update book info
const updateBookById = async (
    id: string,
    updateData: object
): Promise<IBook | null> => {
    const book = await Book.findOneAndUpdate({ _id: id }, updateData, {
        new: true,
    });
    return book;
};

// delete book
const deleteBookById = async (id: string): Promise<IBook | null> => {
    const book = await Book.findByIdAndDelete({ _id: id });
    return book;
};


export const BookService = {
    createBook,
    getBooks,
    getAllBooksByPagination,
    getBook,
    updateBookById,
    deleteBookById,
};