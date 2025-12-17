import { Router } from "express";
import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import { createNewCheckout, finalizePayment, payForCheckout } from "../controllers/checkoutControllers.js";

const router = Router();

router.post("/", protectMiddleware, createNewCheckout);
router.put("/:id/pay", protectMiddleware, payForCheckout);
router.post("/:id/finalize", protectMiddleware, finalizePayment);


export default router;
