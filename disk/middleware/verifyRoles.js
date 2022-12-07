"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRoles = void 0;
const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        var _a;
        if (!(req === null || req === void 0 ? void 0 : req.roles))
            return res === null || res === void 0 ? void 0 : res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req === null || req === void 0 ? void 0 : req.roles);
        const result = (_a = req === null || req === void 0 ? void 0 : req.roles) === null || _a === void 0 ? void 0 : _a.map((role) => rolesArray === null || rolesArray === void 0 ? void 0 : rolesArray.includes(role)).find((val) => val === true);
        if (!result)
            return res === null || res === void 0 ? void 0 : res.sendStatus(401);
        next();
    };
};
exports.verifyRoles = verifyRoles;
