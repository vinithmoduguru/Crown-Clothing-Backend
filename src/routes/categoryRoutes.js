const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
} = require("../controllers/categoryController");

// GET route to fetch all items
router.get("/", getCategories);
router.post("/", createCategory);

module.exports = router;
