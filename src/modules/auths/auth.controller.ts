import { RequestHandler } from 'express';
import { authService } from './auth.service';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await authService.createUser(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Users created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const authController = {
  createUser,
};
