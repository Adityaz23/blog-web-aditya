import { z } from "zod";

export const userSignup = z.object({
  username: z.email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const userSignin = z.object({
  username: z.email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export const updateBlogInpuy = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

// this will let you infer the type of user input because the frontend will need this.
export type Usersignup = z.infer<typeof userSignup>;
export type Usersignin = z.infer<typeof userSignin>;
export type CreateBlog = z.infer<typeof createBlogInput>;
export type UreateBlog = z.infer<typeof updateBlogInpuy>;
