const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new Schema({
  usuario: ObjectId,
  dados: {
    nome: String,
    sobrenome: String,
    estado: String,
    cidade: String,
    bairro: String,
    endereco: String,
    complemento: String,
  },
  produtos: Array,
  total: Number,
  status: String
},
{
  timestamps: true
}
);

const Order = mongoose.model("order", orderSchema, "order");

module.exports = Order;
