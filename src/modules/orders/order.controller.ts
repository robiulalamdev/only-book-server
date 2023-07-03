import { RequestHandler } from 'express';
import { OrderService } from './order.service';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';

const createNewOrder: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.newOrder(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all orders
const getAllOrders: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.getOrders();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Orders retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get single order
const getSingleOrder: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.getSingleOrderById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Order retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createNewOrder,
  getAllOrders,
  getSingleOrder,
};
