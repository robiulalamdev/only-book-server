import { RequestHandler } from "express";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./book.service";
import pick from "../../shared/pick";
import { bookFilterableFields } from "./book.constant";
import { paginationFields } from "../../constants/pagination";
import { IBook } from "./book.interface";

const createBook: RequestHandler = async (req, res, next) => {
    try {
        const result = await BookService.createBook(req.body);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Book created successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};


// get all cows
const getAllBooks: RequestHandler = async (req, res, next) => {
    try {
        const result = await BookService.getBooks();
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Books retrieved successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



// get books by pagination
const getBooksByDynamic: RequestHandler = async (req, res, next) => {
    try {
        const filters = pick(req.query, bookFilterableFields);
        const paginationOptions = pick(req.query, paginationFields);

        console.log(filters, paginationOptions)

        const result = await BookService.getAllBooksByPagination(
            filters,
            paginationOptions
        );

        sendResponse<IBook[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Books retrieved successfully !',
            meta: result.meta,
            data: result.data,
        });
    } catch (error) {
        next(error);
    }
};


export const BookController = {
    createBook,
    getAllBooks,
    getBooksByDynamic,
    // getSingleCow,
    // updateCowInfo,
    // deleteCow,
};