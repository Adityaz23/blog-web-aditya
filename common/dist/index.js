"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInpuy = exports.createBlogInput = exports.userSignin = exports.userSignup = void 0;
const zod_1 = require("zod");
exports.userSignup = zod_1.z.object({
    username: zod_1.z.email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional(),
});
exports.userSignin = zod_1.z.object({
    username: zod_1.z.email(),
    password: zod_1.z.string().min(6),
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updateBlogInpuy = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.number(),
});
