"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInputType = void 0;
const zod_1 = require("zod");
exports.addInputType = zod_1.z.object({
    number_1: zod_1.z.number(),
    number_2: zod_1.z.number(),
});
