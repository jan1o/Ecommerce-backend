const mongoose = require("mongoose");
const {Schema} = mongoose;

const categorySchema = new Schema({
  name: String,
  image: String
},
{
  timestamps: true
}
);

const Category = mongoose.model("category", categorySchema, "category");

module.exports = Category;