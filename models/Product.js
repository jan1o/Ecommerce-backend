const mongoose = require("mongoose");
const {Schema} = mongoose;

const User = require("./User");
const Cart = require("./Cart");

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

productSchema.pre("deleteOne", {document: true}, async function(next){
  //se o produto for excluido remova dos likes dos usuários
  const produto = new mongoose.Types.ObjectId(this._id);

  await User.updateMany({}, {$pull: {favorites: produto}});

  await Cart.updateMany({}, {$pull: {products: {product: produto}}});

  next();
});

const Product = mongoose.model("product", productSchema, "product");

module.exports = Product;
