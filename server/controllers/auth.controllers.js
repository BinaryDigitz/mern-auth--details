import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js";

import { authFail, authSuccess } from "../config/returnMessage.js";
import { NODE_ENV } from "../config/env.js";

// SIGNUP: /api/auth/sign-up
export const signUp = asyncMiddleware(async (req, res) => {});
// SIGNIN: /api/auth/sign-in
export const signIn = asyncMiddleware(async (req, res) => {
  const { error } = req.body;
  if (error) return res.json(authFail(error.details[0].message));

  const { name, email, password } = req.body;

  // check if user exists
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) return res.json(authFail("Email Already Exist"));

  //User doesn't exist.. Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  let user = await UserModel.create({ name, email, password: hashedPassword });

  //Save the user
  await user.save();

  // Generate token from the method stored in the database.
  const token = user.generateToken();

  res.cookie("userToken", token,  {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: NODE_ENV === "production" ? "none" : "strict",
    maxAge: 3 * 7 * 24 * 60 * 60 * 1000
  });
  // Send response without the password
  const { password: pass, ...rest } = user._doc;
  return res.json(
    authSuccess("User created successfully", 201, { userToken: token, rest })
  );
});

// SIGNOUT: /api/auth/sign-out
export const signOut = asyncMiddleware(async (req, res) => {});
