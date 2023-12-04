const mongoose = require("mongoose");
const {Schema} = mongoose;

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

const User = mongoose.model("user", userSchema, "user");

module.exports = User;
