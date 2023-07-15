import { RequestHandler } from "express";
import { ReviewService } from "./review.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const createBookReview: RequestHandler = async (req, res, next) => {
    try {
        const result = await ReviewService.createBookReview(req.body);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Review created successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};



// get single book
const getBookReviews: RequestHandler = async (req, res, next) => {
    try {
        const result = await ReviewService.getReviews(req.params.id);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Reviews retrieved successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const ReviewController = {
    createBookReview,
    getBookReviews
}