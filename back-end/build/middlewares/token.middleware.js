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
exports.tokenMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
const error_middleware_1 = require("./error.middleware");
// import { IReqUser } from '../interfaces/Request.interface';
const secret = process.env.JWT_SECRET || 'jwtsecret';
const tokenMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization: token } = req.headers;
    if (!token) {
        throw new error_middleware_1.ErrorHandler('Token not found', http_status_1.default.UNAUTHORIZED);
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.token = decoded;
        next();
    }
    catch (err) {
        res.status(http_status_1.default.UNAUTHORIZED).json({ message: 'Jwt malformed' });
    }
});
exports.tokenMiddleware = tokenMiddleware;
