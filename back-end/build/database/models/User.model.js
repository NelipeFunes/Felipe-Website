"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const _1 = __importDefault(require("."));
class User extends sequelize_2.Model {
}
User.init({
    id: {
        allowNull: false,
        type: sequelize_2.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        allowNull: false,
        type: sequelize_2.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_2.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: sequelize_2.STRING,
    },
    admin: {
        allowNull: true,
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    birthday: {
        allowNull: false,
        type: sequelize_2.DATEONLY,
    },
    controller: {
        allowNull: true,
        type: sequelize_2.STRING,
    },
    platform: {
        allowNull: false,
        type: sequelize_2.STRING,
    }
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
