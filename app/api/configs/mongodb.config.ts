import { createConnection } from "mongoose";

export const DB = createConnection(
  process.env.MONGO_URL ??
    "mongodb+srv://dev:IOs5lH9eWEOtUoHL@cluster0.suvdcbj.mongodb.net/?",
  {
    dbName: "main",
  }
);
