"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
// import Joi from 'joi';
const User_model_1 = __importDefault(require("../database/models/User.model"));
const UserService = {
    // validateBody(body) {
    //   const schema = Joi.object({
    //     name: Joi.string().required(),
    //     password: Joi.string().required().min(5),
    //     email: Joi.string().email().required(),
    //   })
    // },
    createUser({ name, password, email, driver, admin, birthday, controller }) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPass = yield (0, bcryptjs_1.hash)(password, 10);
            const user = yield User_model_1.default.create({ name, password: hashedPass, email, driver, admin, birthday, controller });
            return user;
        });
    },
    readUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_model_1.default.findAll({
                attributes: {
                    exclude: ['password'],
                },
            });
            return users;
        });
    },
    // updateUsers() {
    // },
    // deleteUser() {
    // },
};
exports.default = UserService;
