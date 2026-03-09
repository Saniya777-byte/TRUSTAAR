const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const { createProduct, getProducts } = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.post("/", protect, admin, createProduct);

module.exports = router;