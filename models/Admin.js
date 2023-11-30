const mongoose = require("mongoose");
const {Schema} = mongoose;

const adminSchema = new Schema({
  user: mongoose.Schema.Types.ObjectId
}, 
{
  timestamps: true
}
);

const Admin = mongoose.model("admin", adminSchema, "admin");

module.exports = Admin;
