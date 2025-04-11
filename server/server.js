import cookieParser from "cookie-parser";
import express from "express";
import loadDatabase from './config/loadDatabase.js'
import morgan from "morgan";
import cors from "cors";
import { JWT_SECRET } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
import arcjetMiddleware from "./middleware/arcject.middleware.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import { workflowClient } from "./config/upstash.js";

// Terminate process if no JWT_SECRET
if (!JWT_SECRET) {
  console.log("FATAL: NO JWT_SECRET KEY  Please provide key.");
  process.exit(1);
}
// Handle uncaught exceptions
process.on("uncaughtException", (ex) => {
  console.log("UNCAUGHT EX detected");
  console.log(ex.message, ex);
});
const app = express();

const corsOrigin = {
  origin: ['http://localhost:5173'],
  httpOnly:true
}

// middleware
app.use(express.json());
app.use(cors(corsOrigin));
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended : false}))
app.use(arcjetMiddleware)

// routes
app.get('/', (req, res) =>{
  res.json({success: true, message: 'Hello world'})
})
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/subscriptions', subscriptionRouter)
app.use('/api/workflows', workflowClient)


// Handle error handling
app.use(errorMiddleware)


export default app;
loadDatabase()
