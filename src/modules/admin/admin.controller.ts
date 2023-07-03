import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { IAdmin } from './admin.interface';
import { AdminService } from './admin.service';
import sendResponse from '../../shared/sendResponse';


const createAdmin: RequestHandler =async (req, res, next)=>{
  try {
      const result = await AdminService.createAdmin(req.body);
      const responseData = {
      phoneNumber: result.phoneNumber,
      role: result.role,
      name: result.name,
      address: result.address,
      _id: result._id,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
      __v: result.__v
    };
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: responseData,
    });
  } catch (error) {
    next(error);
  }
}

// const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await AdminService.getSingleAdmin(id);

//   sendResponse<IAdmin>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin fetched successfully !',
//     data: result,
//   });
// });

// const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, adminFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await AdminService.getAllAdmins(filters, paginationOptions);

//   sendResponse<IAdmin[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admins fetched successfully !',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const updateAdmin = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await AdminService.updateAdmin(id, updatedData);

//   sendResponse<IAdmin>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin updated successfully !',
//     data: result,
//   });
// });

// const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await AdminService.deleteAdmin(id);

//   sendResponse<IAdmin>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin deleted successfully !',
//     data: result,
//   });
// });

export const AdminController = {
  createAdmin
  // getSingleAdmin,
  // getAllAdmins,
  // updateAdmin,
  // deleteAdmin,
};
