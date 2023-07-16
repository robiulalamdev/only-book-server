import { IWishlist } from "./wishlist.interface";
import Wishlist from "./wishlist.model";

const createWishlist = async (wishlist: IWishlist): Promise<IWishlist | null> => {
    const newWishlist = new Wishlist(wishlist);
    const createdWishlist = await newWishlist.save();
    return createdWishlist;
};


// get all cows
const getAllWishlist = async (user: string, query: string): Promise<IWishlist[]> => {
    const wishlists = await Wishlist.find({ user: user, status: query }).populate('book').sort({ _id: -1 })
    return wishlists;
};

// get all cows
const getAllWishlistItems = async (user: string): Promise<IWishlist[]> => {
    const wishlists = await Wishlist.find({ user: user }).populate('book').sort({ _id: -1 })
    return wishlists;
};

// get all cows
const getSingleWishlist = async (id: string, user: string): Promise<IWishlist | null> => {
    const wishlist = await Wishlist.findOne({ book: id, user: user }).populate('book')
    return wishlist;
};





// update book info
const updateWishlistById = async (
    id: string,
    updateData: object
): Promise<IWishlist | null> => {
    const wishlist = await Wishlist.findOneAndUpdate({ _id: id }, updateData, {
        new: true,
    });
    return wishlist;
};

// delete wishlt
const deleteWishlistById = async (id: string): Promise<IWishlist | null> => {
    const result = await Wishlist.findByIdAndDelete({ _id: id });
    return result;
};


export const WishlistService = {
    createWishlist,
    getAllWishlist,
    getAllWishlistItems,
    getSingleWishlist,
    deleteWishlistById,
    updateWishlistById
}