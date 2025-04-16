import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
  })
);
const route = app.get("/hello", (c) => {
  return c.json({ message: "Hello Hono!" });
});

const route2 = app.get("/hello2", (c) => {
  return c.json({ message: "Hello Hono2!" });
});

export type AppType = typeof route | typeof route2;

export default app;
