import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { JWT_SECRET } from "./config/env.js";
import errorHandler from "./middleware/errorHandler.js";
import authRouter from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

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

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

// routes
app.get('/', (req, res) =>{
    res.json({success: true, message: 'Hello world'})
})
app.use('/api/auth', authRouter)
app.use('/api/users', userRoutes)


// Handle error handling
app.use(errorHandler)
export default app;
