import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import conenctDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT;

// Connect to MongoDB
conenctDB();

app.get("/", (req, res) => {
  res.send("Back end is working");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart" , cartRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
