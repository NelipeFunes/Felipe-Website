"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.ErrorHandler = ErrorHandler;
const errorMiddleware = (err, _req, res, _next) => {
    const { message, code } = err;
    if (code) {
        return res.status(code).json({ message });
    }
    return res.status(500).json({ message });
};
exports.default = errorMiddleware;
