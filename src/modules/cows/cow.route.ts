import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CowValidation } from './cow.validation';
import { CowController } from './cow.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(CowValidation.createCowZodValidate),
  CowController.createCow
);
router.get('/all', CowController.getAllCows);

// get cows by pagination
router.get('/', CowController.getCowsByDynamic);

router.get('/:id', CowController.getSingleCow);
router.patch(
  '/:id',
  validateRequest(CowValidation.updateCowZodValidate),
  CowController.updateCowInfo
);
router.delete('/:id', CowController.deleteCow);

export const cowRoutes = router;
