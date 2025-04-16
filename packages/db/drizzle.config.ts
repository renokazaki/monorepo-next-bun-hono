// packages/drizzle.config.ts
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// 現在のディレクトリの.envファイルを読み込む
// 同じディレクトリにあるのでパスの計算は不要
config();

export default defineConfig({
  out: "./drizzle",
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
