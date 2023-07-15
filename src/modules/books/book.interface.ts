/* eslint-disable consistent-type-definitions */

import { Date, Model, Types } from 'mongoose';

export type IBook = {
    title: string;
    genre: string;
    author: string;
    publisher: string;
    publicationDate: Date;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilter = {
    searchTerm?: string;
};
