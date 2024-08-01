const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stockQuantity: Number,
  category: String
});

module.exports = mongoose.model('Product', ProductSchema);
