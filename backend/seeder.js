import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/Product.js";
import { User } from "./models/User.js";
import { products } from "./data/products.js";

dotenv.config();

// Connect to mongoDB

mongoose.connect(process.env.MONGO_URI);

// Function to seed data

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();

    // Create a default admin User
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "12345678",
      role: "admin",
    });

    // Assign the defaut userId to each product
    const userId = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    // Insert Product In the database
    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data", error);
    process.exit(1);
  }
};

seedData();
