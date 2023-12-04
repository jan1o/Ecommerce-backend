const Admin = require("../models/Admin");
const mongoose = require("mongoose");

const adminGuard = async(req, res, next) => {
  const user = req.user;

  const admin = await Admin.findOne({ user: new mongoose.Types.ObjectId(user._id) });

  if(!admin){
    return res.status(401).json({errors: ["Acesso negado."]});
  }

  next();

}

module.exports = adminGuard;