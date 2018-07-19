const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductModel = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  ASIN: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductModel);