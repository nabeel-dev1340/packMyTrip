import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
});
