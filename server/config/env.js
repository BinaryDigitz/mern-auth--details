import { config } from "dotenv";

config({ path: `.env.${process.NODE_ENV || "development"}.local` });

export const {
  PORT,
  NODE_ENV,
  JWT_SECRET_EXPIRES_IN,
  JWT_SECRET,
  MONGODB_URI,
  ARCJET_KEY,
} = process.env;
