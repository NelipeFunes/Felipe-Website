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
const http_status_1 = __importDefault(require("http-status"));
const joi_1 = __importDefault(require("joi"));
const User_model_1 = __importDefault(require("../database/models/User.model"));
const error_middleware_1 = require("../middlewares/error.middleware");
const UserService = {
    validateBody(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                name: joi_1.default.string().required(),
                password: joi_1.default.string().required().min(5),
                email: joi_1.default.string().email().required(),
                birthday: joi_1.default.date().required(),
                controller: joi_1.default.string().required().min(5),
            });
            const { error } = schema.validate(body);
            if (error)
                throw new error_middleware_1.ErrorHandler(error.message, http_status_1.default.BAD_REQUEST);
            const exists = yield User_model_1.default.findOne({ where: { email: body.email } });
            if (exists)
                throw new error_middleware_1.ErrorHandler('Email already in use', http_status_1.default.UNAUTHORIZED);
        });
    },
    verifyUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_model_1.default.findOne({ where: { email } });
            if (!user)
                throw new error_middleware_1.ErrorHandler('User not found', http_status_1.default.NOT_FOUND);
            const check = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!check)
                throw new error_middleware_1.ErrorHandler('Invalid Password', http_status_1.default.UNAUTHORIZED);
        });
    },
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
    // async updateUsers({ email, password }: IUser) {
    //   await this.verifyUser(email, password);
    //   await User.update({})
    // },
    // deleteUser() {
    // },
};
exports.default = UserService;
