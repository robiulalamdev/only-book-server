/* eslint-disable consistent-type-definitions */

import { Date, Model, Types } from 'mongoose';

export type IBook = {
    image: string;
    title: string;
    genre: string;
    author: string;
    publisher: string;
    publicationDate: Date;
    publicationYear: string;
    description: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilter = {
    searchTerm?: string;
};
