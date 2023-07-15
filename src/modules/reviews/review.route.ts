import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validation';
const router = express.Router();

router.post(
    '/',
    validateRequest(ReviewValidation.createReviewZodValidate),
    ReviewController.createBookReview
);


router.get("/:id", ReviewController.getBookReviews)


export const reviewRoutes = router;