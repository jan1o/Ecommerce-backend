const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new Schema({
  user: Schema.Types.ObjectId,
  data: {
    name: String,
    secondName: String,
    state: String,
    city: String,
    neighborhood: String,
    address: String,
    complement: String,
  },
  products: Array,
  total: Number,
  status: String,
  request_cancel: Boolean,
},
{
  timestamps: true
}
);

const Order = mongoose.model("order", orderSchema, "order");

module.exports = Order;
