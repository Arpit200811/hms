import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,   // 🔑 Neon se aaya hua URL
  synchronize: true,
  entities: ["dist/Entities/**/*.js"],  // deploy ke baad JS files
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
  ssl: { rejectUnauthorized: false } // Neon SSL require karta hai
});
