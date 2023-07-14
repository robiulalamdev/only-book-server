import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { authRoutes } from '../modules/auths/auth.route';
import { cowRoutes } from '../modules/cows/cow.route';
import { orderRoutes } from '../modules/orders/order.route';
import { AdminRoutes } from '../modules/admin/admin.route';
const router = express.Router();



const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/books',
    route: cowRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
