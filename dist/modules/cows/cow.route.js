"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cow_validation_1 = require("./cow.validation");
const cow_controller_1 = require("./cow.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(cow_validation_1.CowValidation.createCowZodValidate), cow_controller_1.CowController.createCow);
router.get('/all', cow_controller_1.CowController.getAllCows);
// get cows by pagination
router.get('/', cow_controller_1.CowController.getCowsByDynamic);
router.get('/:id', cow_controller_1.CowController.getSingleCow);
router.patch('/:id', (0, validateRequest_1.default)(cow_validation_1.CowValidation.updateCowZodValidate), cow_controller_1.CowController.updateCowInfo);
router.delete('/:id', cow_controller_1.CowController.deleteCow);
exports.cowRoutes = router;
