import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { authRoutes } from '../modules/auths/auth.route';
import { bookRoutes } from '../modules/books/book.route';
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
    route: bookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
