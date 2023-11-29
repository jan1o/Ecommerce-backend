const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
  nome: String,
  nascimento: Date,
  telefone: String,
  imagem: String,
  email: String,
  senha: String,
  favorites: Array
}, 
{
  timestamps: true
}
);


const User = mongoose.model("user", userSchema, "user");

module.exports = User;