"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const dbconnect_1 = require("../config/dbconnect");
const fs_1 = __importDefault(require("fs"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const logEvents_1 = require("../middleware/logEvents");
const corsOptions_1 = require("../config/corsOptions");
const credentials_1 = require("../middleware/credentials");
const errorHandler_1 = require("../middleware/errorHandler");
const verifyJWT_1 = require("../middleware/verifyJWT");
const app = (0, express_1.default)();
const fsPromises = fs_1.default.promises;
const PORT = process.env.PORT || 5000;
//// declare the dotenv configuration
(0, dbconnect_1.connectDatabase)();
(0, dotenv_1.config)();
////
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false, limit: 1 }));
app.use((0, cookie_parser_1.default)());
app.use(credentials_1.credientials);
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
app.use(logEvents_1.logger);
// ALL ROUTES
// jwt verified verifyJWT routes
app.use(verifyJWT_1.verifyJWT);
/// render todo logistics
app.use(errorHandler_1.errorHandler);
app.get("/", (req, res) => {
    res.send("Hello wORLD ");
    console.log(`Hello world`);
});
mongoose_1.default.connection.once("open", (req, res) => {
    res.send("Database connected ");
    console.log(`Connected to MongoDB Database`);
    app.listen(PORT, () => console.log(`server is running on ${PORT}`));
});
