import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { userSignin, userSignup } from "@adityaz23op/medium-blogs";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  // you should alwaya sanitise the entry points with the xod validation.
  /* 
    {
    "email": string,
    "password": string,
    name: optional
  }
  */
  const body = await c.req.json();
  const { success } = userSignup.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      // if someone tries to enter the duplicated email then this is the step which we want to take.
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt);
  } catch (e) {
    c.status(400);
    return c.text("Invalid");
  }
});
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = userSignin.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.findFirst({
      // if someone tries to enter the duplicated email then this is the step which we want to take.
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403); // common status code for unauthorized users.
      return c.json({
        message: "Incorrect credentials.",
      });
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt);
  } catch (e) {
    c.status(400);
    return c.text("Invalid");
  }
});
