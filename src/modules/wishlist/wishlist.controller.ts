import { RequestHandler } from "express";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { WishlistService } from "./wishlist.service";

const createWishlist: RequestHandler = async (req, res, next) => {
    try {
        const result = await WishlistService.createWishlist(req.body);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Wishlist created successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};



// get all wishlists
const getWishlistItems: RequestHandler = async (req, res, next) => {
    try {
        const result = await WishlistService.getAllWishlist(req.params.userId);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Wishlist retrieved successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
// get all wishlists
const getWishlistById: RequestHandler = async (req, res, next) => {
    try {
        const result = await WishlistService.getSingleWishlist(req.params.id, req.params.userId);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Wishlist retrieved successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};





// update book info
const updateWishlistInfo: RequestHandler = async (req, res, next) => {
    try {
        const result = await WishlistService.updateWishlistById(req.params.id, req.body);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Wishlist Status updated successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// delete book
const deleteWishlist: RequestHandler = async (req, res, next) => {
    try {
        const result = await WishlistService.deleteWishlistById(req.params.id);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Wishlist deleted successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};





export const WishlistController = {
    createWishlist,
    getWishlistItems,
    getWishlistById,
    deleteWishlist,
    updateWishlistInfo
}