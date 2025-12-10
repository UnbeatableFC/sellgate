import { Router } from "express";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { registerUser } from "../controllers/userControllers.js";

const router = Router();

// Registration Route
router.post("/register", registerUser);

export default router;
