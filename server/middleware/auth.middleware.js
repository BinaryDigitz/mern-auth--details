import { JWT_SECRET } from "../config/env.js";
import { authFail } from "../config/returnMessage.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

async function authrize(req, res, next) {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) return res.json(authFail("Unauthorized", 401));

    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if user still exist in the database...
    const user = await UserModel.findById(decoded.id);
    if (!user) return res.json(authFail("Unauthorized", 401));

    req.user = user;
    next();
  } catch (ex) {
    res.status(401).json({ message: "Unathorized", error: ex.message });
  }
}

export default authrize;
