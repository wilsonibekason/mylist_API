"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJWT = (req, res, next) => {
    var _a;
    const authHeader = req.headers["authorization"] || ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.Authorization);
    if (!authHeader.startsWith("Bearer"))
        return res.sendStatus(401); ///unauthorised
    console.log(authHeader); // Bearer Token
    const token = authHeader.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err)
            err instanceof Error &&
                res.status(403).json({ statue: "invalid", message: err.message }); // invalid token
        req.fullname = decoded.UserInfo.fullname;
        req.email = decoded.UserInfo.email;
        req.roles = decoded.UserInfo.roles;
        next();
    });
};
exports.verifyJWT = verifyJWT;
