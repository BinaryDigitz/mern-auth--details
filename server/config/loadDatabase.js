import mongoose from "mongoose";
import app from "../server.js";
import { MONGODB_URI, PORT, NODE_ENV } from "./env.js";

if(!MONGODB_URI){
  throw new Error('Please define the MONGOSB_URI environtment variable inside .env.local')
}
async function connectDatabase() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log(`Connected to database in ${NODE_ENV} mode`);
      app.listen(PORT, () => {
        console.log(`Mern is running at http://localhost:${PORT}`);
      });
    })
    .catch(() => {
      console.log(`Failed to connect to database in ${NODE_ENV} mode`);
    });
}

export default connectDatabase;
