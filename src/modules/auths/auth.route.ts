import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import createUserZodValidate from '../users/user.zodHanadler';
import { authController } from './auth.controller';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(createUserZodValidate),
  authController.createUser
);

export const authRoutes = router;
