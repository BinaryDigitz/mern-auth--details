import { config } from "dotenv";

config({ path: `.env.${process.NODE_ENV || "development"}.local` });

export const {
  PORT,
  NODE_ENV,
  JWT_SECRET_EXPIRES_IN,
  JWT_SECRET,
  MONGODB_URI,
  ARCJET_KEY,
  UPSTASH_URL,
  QSTASH_TOKEN,
  QSTASH_CURRENT_SIGNING_KEY,
  QSTASH_NEXT_SIGNING_KEY
} = process.env;
