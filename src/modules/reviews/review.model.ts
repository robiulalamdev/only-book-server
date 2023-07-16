import { model, Schema, Types } from 'mongoose';
import { IReview, reviewModel } from './review.interface';

const reviewSchema = new Schema<IReview>(
    {
        book: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        reveiwer: {
            type: String,
            ref: "User",
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Review = model<IReview, reviewModel>('Review', reviewSchema);
export default Review;