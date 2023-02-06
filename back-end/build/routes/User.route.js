"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controllers/User.controller"));
const UserRoute = (0, express_1.Router)();
UserRoute.route('/')
    .get(User_controller_1.default.readUsers);
exports.default = UserRoute;
