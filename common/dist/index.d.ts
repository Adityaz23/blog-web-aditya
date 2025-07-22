import { z } from "zod";
export declare const userSignup: z.ZodObject<{
    username: z.ZodEmail;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const userSignin: z.ZodObject<{
    username: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export declare const updateBlogInpuy: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, z.core.$strip>;
export type Usersignup = z.infer<typeof userSignup>;
export type Usersignin = z.infer<typeof userSignin>;
export type CreateBlog = z.infer<typeof createBlogInput>;
export type UreateBlog = z.infer<typeof updateBlogInpuy>;
