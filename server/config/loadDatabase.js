import mongoose from "mongoose";
import app from "../server.js";
import { MOONGODB_URI, PORT } from "./env.js";

function connectDatabase() {
  mongoose
    .connect(MOONGODB_URI)
    .then(() => {
      console.log("Connected to database....");
      app.listten(PORT, () => {
        console.log(`Mern is running at http://localhost:${PORT}`);
      });
    })
    .catch(() => {
      console.log("Failed to connect to database");
    });
}

export default connectDatabase;
