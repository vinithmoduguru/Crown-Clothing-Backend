import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import categoryRoutes from "./routes/categoryRoutes";

// Load environment variables
dotenv.config();

// Initialize database connection
connectDB();

// Initialize Express app
const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// Routes
app.use("/api/categories", categoryRoutes);

export default app;
