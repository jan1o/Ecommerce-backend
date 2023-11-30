const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  previousPrice: Number,
  price: Number,
  shipping: Number,
  total: Number,
  likes: Array,
  images: Array,
  categories: Array,
  specifications: [
    {
      spec: String,
      desc: String,
    }
  ],
},
{
  timestamps: true
}
);

const Product = mongoose.model("product", productSchema, "product");

module.exports = Product;
