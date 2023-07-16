import { z } from 'zod';

const createBookZodValidate = z.object({
    body: z.object({
        image: z.string({
            required_error: 'Image is required',
        }),
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
        publicationYear: z.string({
            required_error: 'Year is required',
        }),
        description: z.string({
            required_error: 'Description is required',
        }),
    }),
});

const updateBookZodValidate = z.object({
    body: z.object({
        image: z.string({
            required_error: 'Image is required',
        }),
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
        description: z.string({
            required_error: 'Description is required',
        }),
    }),
});

export const BookValidation = {
    createBookZodValidate,
    updateBookZodValidate,
};
