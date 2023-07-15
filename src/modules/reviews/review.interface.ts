import { Model } from "mongoose";

export type IReview = {
    book: string;
    comment: string;
    reveiwer: string;
}


export type reviewModel = Model<IReview, Record<string, unknown>>