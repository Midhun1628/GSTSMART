import express from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { checkPermission } from "../middleware/permissionMiddleware.js";

const router = express.Router();

router.get("/products", authenticateToken, checkPermission("view_products"), getAllProducts);
router.post("/products", authenticateToken, checkPermission("create_products"), createProduct);
router.put("/products/:product_id", authenticateToken, checkPermission("update_products"), updateProduct);
router.delete("/products/:product_id", authenticateToken, checkPermission("delete_products"), deleteProduct);

export default router;
