"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/users/user.route");
const auth_route_1 = require("../modules/auths/auth.route");
const book_route_1 = require("../modules/books/book.route");
const review_route_1 = require("../modules/reviews/review.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoutes,
    },
    {
        path: '/books',
        route: book_route_1.bookRoutes,
    },
    {
        path: '/reviews',
        route: review_route_1.reviewRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
