import { Router } from "express";
import { getUserProfile, loginUser, registerUser } from "../controllers/userControllers.js";
import { protectMiddleware } from "../middlewares/protectMiddleware.js";

const router = Router();

// Registration Route
router.post("/register", registerUser);

router.post("/login" , loginUser)

router.get("/profile" , protectMiddleware, getUserProfile)

export default router;
