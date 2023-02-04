"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
// A utilização do underline antes de um parâmetro é uma boa prática quando não estamos fazendo o uso do mesmo.
app.get('/', (_req, res) => {
    res.status(http_status_1.default.OK).send('Express + TypeScript+eu');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
