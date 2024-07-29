import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src_ts/data_storage/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
});
