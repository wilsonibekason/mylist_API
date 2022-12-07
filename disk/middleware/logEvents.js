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
exports.logger = exports.logEvents = void 0;
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const date_fns_1 = require("date-fns");
const uuid = (0, uuid_1.v4)();
const fsPromises = fs_1.default.promises;
const logEvents = (message, logName) => __awaiter(void 0, void 0, void 0, function* () {
    const dateTime = `${(0, date_fns_1.format)(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid}\t${message}\n`;
    try {
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, "..", "logs"))) {
            yield fsPromises.mkdir(path_1.default.join(__dirname, "..", "logs"));
        }
        yield fsPromises.appendFile(path_1.default.join(__dirname, "..", "logs", logName), logItem);
    }
    catch (error) {
        error instanceof Error && error.message;
    }
});
exports.logEvents = logEvents;
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, `reqLog.txt`);
    console.log(`${req.methods} ${req.path} `);
    next();
};
exports.logger = logger;
