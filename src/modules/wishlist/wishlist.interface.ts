import { Model } from "mongoose";

export type IWishlitStatus = string

export type IWishlist = {
    book: string;
    status: IWishlitStatus;
    user: string;
}


export type WishlistModel = Model<IWishlist, Record<string, unknown>>