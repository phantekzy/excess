import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { getInventory, updateStock } from "../controllers/inventoryController";

const router = Router();

router.get("/", authMiddleware, getInventory);
router.patch("/:id", authMiddleware, updateStock);

export default router;
