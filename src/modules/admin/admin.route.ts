import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';
import { ENUM_USER_ROLE } from '../../enums/user';
const router = express.Router();

router.post('/create-admin',validateRequest(AdminValidation.createAdminValidation), AdminController.createAdmin);

// router.get(
//   '/',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   AdminController.getAllAdmins
// );

// router.patch(
//   '/:id',
//   validateRequest(AdminValidation.updateAdmin),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   AdminController.updateAdmin
// );

// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN),
//   AdminController.deleteAdmin
// );

export const AdminRoutes = router;
