import { z } from 'zod';
import { Types } from 'mongoose';

const createBookZodValidate = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Ttile is required',
        }),
        genre: z.string({
            required_error: 'Genre is required',
        }),
        author: z.string({
            required_error: 'Author is required',
        }),
        publisher: z.string({
            required_error: 'Publisher is required',
        }),
        publicationDate: z.string({
            required_error: 'Date is required',
        }),
    }),
});

const updateBookZodValidate = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Ttile is required',
        }),
        genre: z.string({
            required_error: 'Genre is required',
        }),
        author: z.string({
            required_error: 'Author is required',
        }),
        publisher: z.string({
            required_error: 'Publisher is required',
        }),
        publicationDate: z.string({
            required_error: 'Date is required',
        }),
    }),
});

export const BookValidation = {
    createBookZodValidate,
    updateBookZodValidate,
};
