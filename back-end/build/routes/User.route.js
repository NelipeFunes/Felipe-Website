"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controllers/User.controller"));
const token_middleware_1 = require("../middlewares/token.middleware");
const UserRoute = (0, express_1.Router)();
UserRoute.route('/')
    .get(token_middleware_1.tokenMiddleware, User_controller_1.default.readUsers);
UserRoute.route('/register')
    .post(User_controller_1.default.createUser);
UserRoute.route('/login')
    .post(User_controller_1.default.logIn);
exports.default = UserRoute;
