import { Router } from "express";

import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import { isAdmin } from "../middlewares/checkIsAdminMiddleware.js";
import {
  adminDeleteOrder,
  adminGetAllOrders,
  adminUpdateStatus,
} from "../controllers/adminOrderControllers.js";

const router = Router();

router.get("/", protectMiddleware, isAdmin, adminGetAllOrders);
router.put("/:id", protectMiddleware, isAdmin, adminUpdateStatus);
router.delete("/:id", protectMiddleware, isAdmin, adminDeleteOrder);

export default router;
