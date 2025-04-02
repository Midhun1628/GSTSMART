import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Allow Vue.js frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed request methods
    credentials: true, // Allow cookies/auth headers
  }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
