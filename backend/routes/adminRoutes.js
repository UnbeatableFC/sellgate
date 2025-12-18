import { Router } from "express";


import { protectMiddleware } from "../middlewares/protectMiddleware.js";
import { isAdmin } from "../middlewares/checkIsAdminMiddleware.js";
import { addNewUser, deleteUser, getAllUsers, updateUser } from "../controllers/adminControllers.js";

const router = Router()

router.get("/" , protectMiddleware , isAdmin , getAllUsers)
router.post("/" , protectMiddleware , isAdmin , addNewUser)
router.put("/:id" , protectMiddleware , isAdmin , updateUser)
router.delete("/:id" , protectMiddleware , isAdmin , deleteUser)

export default router
