import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidation } from './book.validation';
import { BookController } from './book.controller';
const router = express.Router();

router.post(
    '/',
    validateRequest(BookValidation.createBookZodValidate),
    BookController.createBook
);


router.get('/all', BookController.getAllBooks);

// // get cows by pagination
router.get('/', BookController.getBooksByDynamic);

router.get('/:id', BookController.getSingleBook);


router.patch(
    '/:id',
    validateRequest(BookValidation.updateBookZodValidate),
    BookController.updateBookInfo
);

router.get('/genries/all', BookController.getAllGenries);
router.post('/publication/all/:genre', BookController.getAllYears);

router.delete('/:id', BookController.deleteBook);


export const bookRoutes = router;
