const mongoose = require("mongoose");
const {Schema} = mongoose;

const Cart = require("./Cart");

const userSchema = new Schema({
  name: String,
  birth: String,
  telephone: String,
  image: String,
  email: String,
  password: String,
  favorites: Array,
}, 
{
  timestamps: true
}
);

userSchema.pre("save", async function(next){
  //se o usuário estiver sendo criado então crie um carrinho para ele
  if(this.isNew){
    const cart = await Cart.create({
      user: new mongoose.Types.ObjectId(this._id),
      products: [],
      total: 0
    });
  }
});

const User = mongoose.model("user", userSchema, "user");

module.exports = User;
