"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || 'jwtsecret';
const Token = {
    makeToken({ id, name, email, driver, admin, birthday, license, controller }) {
        const token = (0, jsonwebtoken_1.sign)({ id, name, email, driver, admin, birthday, license, controller }, secret, {
            expiresIn: '24h',
        });
        return token;
    },
};
exports.default = Token;
