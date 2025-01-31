const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const categoryRoutes = require("./routes/categoryRoutes");

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
module.exports = app;
