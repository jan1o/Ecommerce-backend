const mongoose = require("mongoose");
const {Schema} = mongoose;

const cartSchema = new Schema({
  user: Schema.Types.ObjectId,
  products: [
    {
      product: Schema.Types.ObjectId,
      amount: Number,
    },
  ],
  total: Number,
},
{
  timestamps: true
}
);

const Cart = mongoose.model("cart", cartSchema, "cart");

module.exports = Cart;