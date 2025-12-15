import { Router } from "express";
import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import {
    bestSellerProducts,
  createNewProduct,
  deleteProduct,
  getAllProducts,
  getSimilarProduct,
  getSingleProduct,
  newArrivals,
  updateProduct,
} from "../controllers/productControllers.js";
import { isAdmin } from "../middlewares/checkIsAdminMiddleware.js";

const router = Router();

router.post("/", protectMiddleware, isAdmin, createNewProduct);
router.put("/:id", protectMiddleware, isAdmin, updateProduct);
router.delete("/:id", protectMiddleware, isAdmin, deleteProduct);
router.get("/", getAllProducts);
router.get("/best-seller", bestSellerProducts);
router.get("/new-arrivals", newArrivals);
router.get("/:id", getSingleProduct);
router.get("/similar/:id", getSimilarProduct);

export default router;
