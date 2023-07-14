import { RequestHandler } from "express";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./book.service";

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
// const getAllCows: RequestHandler = async (req, res, next) => {
//     try {
//       const result = await CowService.getCows();
//       sendResponse(res, {
//         success: true,
//         statusCode: httpStatus.OK,
//         message: 'Cows retrieved successfully',
//         data: result,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };


export const BookController = {
    createBook,
    // getCowsByDynamic,
    // getAllCows,
    // getSingleCow,
    // updateCowInfo,
    // deleteCow,
};
