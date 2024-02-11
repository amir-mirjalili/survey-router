import { createConnection } from "mongoose";

export const DB = createConnection(process.env.MONGO_URL ?? "", {
  dbName: "main",
});
