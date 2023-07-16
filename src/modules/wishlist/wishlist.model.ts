import { model, Schema, Types } from 'mongoose';
import { IWishlist, WishlistModel } from './wishlist.interface';
import { wishlistStatus } from './wishlist.constent';

const wishlilstSchema = new Schema<IWishlist>(
    {
        book: {
            type: String,
            ref: "Book",
            required: true,
        },
        status: {
            type: String,
            enum: wishlistStatus,
            required: true,
            default: "none"
        },
        user: {
            type: String,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Wishlist = model<IWishlist, WishlistModel>('Wishlist', wishlilstSchema);
export default Wishlist;