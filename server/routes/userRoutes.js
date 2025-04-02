import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { checkPermission } from "../middleware/permissionMiddleware.js";

const router = express.Router();

router.get("/users", authenticateToken, checkPermission("view_users"), getAllUsers);
router.post("/users", authenticateToken, checkPermission("create_users"), createUser);
router.put("/users/:user_id", authenticateToken, checkPermission("update_users"), updateUser);
router.delete("/users/:user_id", authenticateToken, checkPermission("delete_users"), deleteUser);

export default router;
