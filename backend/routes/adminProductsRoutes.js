import { Router } from "express";

import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import { isAdmin } from "../middlewares/checkIsAdminMiddleware.js";
import { adminGetAllProducts } from "../controllers/adminProductsControllers.js";

const router = Router();

router.get("/", protectMiddleware, isAdmin, adminGetAllProducts);

export default router;
