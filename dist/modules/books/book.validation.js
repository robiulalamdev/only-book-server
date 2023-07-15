"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const createBookZodValidate = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Ttile is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        publisher: zod_1.z.string({
            required_error: 'Publisher is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Date is required',
        }),
    }),
});
const updateBookZodValidate = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Ttile is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        publisher: zod_1.z.string({
            required_error: 'Publisher is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Date is required',
        }),
    }),
});
exports.BookValidation = {
    createBookZodValidate,
    updateBookZodValidate,
};
