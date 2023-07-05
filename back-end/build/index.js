"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const User_route_1 = __importDefault(require("./routes/User.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3001;
// A utilização do underline antes de um parâmetro é uma boa prática quando não estamos fazendo o uso do mesmo.
app.get('/', (_req, res) => {
    res.status(200).send('Express + TypeScript');
});
app.use('/users', User_route_1.default);
app.use(error_middleware_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
