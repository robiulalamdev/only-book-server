import { z } from "zod";
import { wishlistStatus } from "./wishlist.constent";

const createWishlistZodValidate = z.object({
    body: z.object({
        book: z.string({
            required_error: 'Book id is required',
        }),
        status: z.enum([...wishlistStatus] as [string, ...string[]]),
        user: z.string({
            required_error: 'user is required',
        })
    }),
});

const updateWishlistValidate = z.object({
    body: z.object({
        book: z.string({
            required_error: 'Book id is required',
        }).optional(),
        status: z.enum([...wishlistStatus] as [string, ...string[]]).optional(),
        user: z.string({
            required_error: 'user is required',
        }).optional()
    }),
});


export const WishlistValidation = {
    createWishlistZodValidate,
    updateWishlistValidate
};