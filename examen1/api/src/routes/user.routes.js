import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.js";
import { verifyToken, requireAdmin } from "../middelwares/auth.middleware.js";

const router = Router();

router.get("/api/users", verifyToken, requireAdmin, getUsers);
router.post("/api/users", createUser);

export default router;
