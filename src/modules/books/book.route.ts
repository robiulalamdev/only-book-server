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



// router.get('/:id', auth(
//     ENUM_USER_ROLE.SELLER,
//     ENUM_USER_ROLE.BUYER,
//     ENUM_USER_ROLE.ADMIN
// ), CowController.getSingleCow);

// router.patch(
//     '/:id',
//     validateRequest(CowValidation.updateCowZodValidate),
//     auth(
//         ENUM_USER_ROLE.SELLER
//     ),
//     CowController.updateCowInfo
// );


// router.delete('/:id',
//     auth(
//         ENUM_USER_ROLE.SELLER
//     ),
//     CowController.deleteCow);

export const bookRoutes = router;
