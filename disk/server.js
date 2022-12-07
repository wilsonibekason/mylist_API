"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const fsPromises = fs_1.default.promises;
const PORT = process.env.PORT || 5000;
//// declare the dotenv configuration
(0, dotenv_1.config)();
////
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false, limit: 1 }));
app.get("/", () => {
    console.log(`Hello world hh`);
});
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
