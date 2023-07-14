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
                return {
                    [field]: { $regex: value, $options: 'i' },
                };
            }),
        });
    }

    console.log(filtersData)

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


export const BookService = {
    createBook,
    getBooks,
    getAllBooksByPagination,
    // getSingleCowById,
    // updateCowById,
    // deleteCowById,
};