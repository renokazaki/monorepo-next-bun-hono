import { Hono } from "hono";
import { cors } from "hono/cors";
import { drizzle } from "drizzle-orm/postgres-js";
// Bunのpostgresではなく、postgres-jsライブラリをインポート
import postgres from "postgres";

import { todos } from "../../../packages/db/schema";

export type Env = {
  DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Env }>();
app.use(
  "*",
  cors({
    origin: "*",
  })
);

const route = app.get("/hello", (c) => {
  return c.json({ message: "Hello Hono!" });
});

const route2 = app.get("/hello2", async (c) => {
  // postgres-jsを使用してクライアントを作成
  const client = postgres(c.env.DATABASE_URL);
  const db = drizzle(client);

  // 変数名の衝突を避ける
  const todoItems = await db.select().from(todos);
  return c.json({ todos: todoItems });
});

export type AppType = typeof route | typeof route2;

export default app;
