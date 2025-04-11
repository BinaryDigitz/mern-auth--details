import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_SECRET_EXPIRES_IN } from "../config/env.js";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      minLength: 6,
      lowercase: true,
      maxLength: 250,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minLength: 6,
      maxLength: 250,
    },
  },
  { Timestamp: true }
);

// save token generation token in database
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, JWT_SECRET, { expiresIn: JWT_SECRET_EXPIRES_IN });
};

const UserModel = mongoose.models.users || mongoose.model("user", userSchema);

export default UserModel;
