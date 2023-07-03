import express from 'express';
import { OrderController } from './order.controller';
import { OrderValidation } from './order.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/',
  validateRequest(OrderValidation.createOrderZodValidation),
  OrderController.createNewOrder
);

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getSingleOrder);

export const orderRoutes = router;
