"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    role: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    birthday: {
        allowNull: false,
        type: sequelize_1.DATEONLY,
    },
    license: {
        allowNull: false,
        type: sequelize_1.INTEGER,
        defaultValue: 0,
    },
    controller: {
        allowNull: true,
        type: sequelize_1.STRING,
    }
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
