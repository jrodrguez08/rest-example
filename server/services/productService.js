const Product = require('../models/productModel');
const databaseService = require('./helpers/databaseService');

module.exports.getProducts = () => {
  return databaseService.getAllEntities(Product);
};

module.exports.createProduct = (product) => {
  return databaseService.createEntity(Product, product);
};