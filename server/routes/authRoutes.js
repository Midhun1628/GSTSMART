import express from "express";
import {login}  from "../controllers/authController.js";
import {createUser} from "../controllers/userController.js"

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

export default router;
