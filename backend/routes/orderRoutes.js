import { Router } from "express";
import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import { getAllOrders, getSingleOrderDetails } from "../controllers/orderControllers.js";

const router = Router()

router.get("/my-orders" , protectMiddleware , getAllOrders)
router.get("/:id" , protectMiddleware , getSingleOrderDetails)

export default router