import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { WishlistValidation } from './withlist.validation';
import { WishlistController } from './wishlist.controller';
const router = express.Router();

router.post('/',
    validateRequest(WishlistValidation.createWishlistZodValidate),
    WishlistController.createWishlist
);


router.get("/:userId", WishlistController.getWishlistItems)
router.get("/all/:userId", WishlistController.getAllWishlistItems)
router.get("/single/:id/:userId", WishlistController.getWishlistById)


router.patch(
    '/:id',
    validateRequest(WishlistValidation.updateWishlistValidate),
    WishlistController.updateWishlistInfo
);

router.delete('/:id', WishlistController.deleteWishlist);


export const wishlistRoutes = router;