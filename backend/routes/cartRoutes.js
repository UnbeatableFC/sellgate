import { Router } from "express";
import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import {
  addProductToCart,
  getUserCart,
  mergeCart,
  removeProductFromCart,
  updateQuantityOnCart,
} from "../controllers/cartControllers.js";

const router = Router();

router.post("/", addProductToCart);
router.put("/", updateQuantityOnCart);
router.delete("/", removeProductFromCart);
router.get("/", getUserCart);
router.post("/merge", protectMiddleware, mergeCart);

export default router;
