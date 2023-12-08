const mongoose = require("mongoose");
const {Schema} = mongoose;

const Product = require("./Product");

const categorySchema = new Schema({
  name: String,
  image: String
},
{
  timestamps: true
}
);

categorySchema.pre("deleteOne", {document: true}, async function(next){
  //quando uma categoria for deletada, os produtos devem ser atualizados para remover essa categoria de sua lista
  const categoria = this._id;

  await Product.updateMany({}, {$pull: {categories: new mongoose.Types.ObjectId(categoria)}});

  next();
});

const Category = mongoose.model("category", categorySchema, "category");

module.exports = Category;