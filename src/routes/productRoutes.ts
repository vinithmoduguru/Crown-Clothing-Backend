import express from "express";
import { getProducts, createProduct } from "../controllers/productController";

const router = express.Router();

// GET route to fetch all items
router.get("/", getProducts);
router.post("/", createProduct);

export default router;
