"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const allowedOrigins_1 = require("./allowedOrigins");
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins_1.allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, false);
        }
        else {
            callback(new Error("Not Allowed by CORS options"));
        }
    },
    optionSuccessStatus: 200,
};
exports.corsOptions = corsOptions;
