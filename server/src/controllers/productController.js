const Product = require("../models/Product");

// Create Product
exports.createProduct = async (req, res) => {
  try {

    const { name, description, price, category, stock, image } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
      createdBy: req.user._id
    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {

  const products = await Product.find();

  res.json(products);
};