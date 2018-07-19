const express = require('express');
const productController = require('../controllers/productController');
const productRouter = express.Router();

productRouter.route('/')
  .get(productController.getProducts);

productRouter.route('/')
  .post(productController.createProduct);

module.exports = productRouter;