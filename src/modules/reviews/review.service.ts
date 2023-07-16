import { IReview } from "./review.interface";
import Review from "./review.model";

const createBookReview = async (review: IReview): Promise<IReview | null> => {
    const newBookReview = new Review(review);
    const createdBookReview = await newBookReview.save();
    return createdBookReview;
};




// get single book
const getReviews = async (id: string): Promise<IReview[] | null> => {
    const bookReviews = await Review.find({ book: id }).sort({ _id: -1 })
    return bookReviews;
};



export const ReviewService = {
    createBookReview,
    getReviews
}