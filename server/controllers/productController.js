const processResponseWith = require('./helpers/processResponse');
const productService = require('../services/productService');

module.exports.getProducts = (req, res) => {
  processResponseWith(res, productService.getProducts, null);
};


module.exports.createProduct = (req, res) => {
  processResponseWith(res, productService.createProduct, req.body);
};
