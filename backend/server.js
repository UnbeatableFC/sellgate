import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import conenctDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import subscribeRoute from "./routes/subscribeRoute.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminProductsRoutes from "./routes/adminProductsRoutes.js";
import adminOrderRoutes from "./routes/adminOrderRoutes.js";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    // Parse form data
    extended: true,
  })
);
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
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoute);
app.use("/api/subscribe", subscribeRoute);

// Admin Routes
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", adminProductsRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
