const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth');

// كل الـ routes محتاجة token ما عدا الـ GET
router.get('/',     productController.getAll);
router.get('/:id',  productController.getOne);
router.post('/',    authMiddleware, productController.create);
router.put('/:id',  authMiddleware, productController.update);
router.delete('/:id', authMiddleware, productController.remove);

module.exports = router;