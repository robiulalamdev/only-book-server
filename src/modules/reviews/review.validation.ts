import { z } from "zod";

const createReviewZodValidate = z.object({
    body: z.object({
        book: z.string({
            required_error: 'Book id is required',
        }),
        comment: z.string({
            required_error: 'Comment is required',
        }),
        reveiwer: z.string({
            required_error: 'Reveiwer is required',
        }).optional()
    }),
});


export const ReviewValidation = {
    createReviewZodValidate,
};