import jwt from "jsonwebtoken";

import { User } from "../models/User.js";

// Middleware to protect routes
export const protectMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select(
        "-password"
      );
      next();
    } catch (error) {
      console.error("Token Verification Failed: ", error);
      res
        .status(401)
        .json({ message: "Not authorized, token failed" });
    }
  } else {
    res
      .status(401)
      .json({ messsage: "Not authorized, no token provided" });
  }
};
