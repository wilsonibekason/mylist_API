"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credientials = void 0;
//@ts-ignore
const allowedorigins_1 = require("../config/allowedorigins");
const credientials = (req, res, next) => {
    const origin = req.header.origin;
    if (allowedorigins_1.allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Credientials", true);
    }
    next();
};
exports.credientials = credientials;
