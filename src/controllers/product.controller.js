const Product = require('../models/product.model');

// GET /api/products
exports.getAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET /api/products/:id
exports.getOne = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// POST /api/products
exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// PUT /api/products/:id
exports.update = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ message: 'Product not found' });
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// DELETE /api/products/:id
exports.remove = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ message: 'Product not found' });
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};