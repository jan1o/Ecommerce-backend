const Order = require("../models/Order");

const mongoose = require("mongoose");

const getAllOrders = async(req, res) => {
  try{

    const orders = await Order.find({}).sort({ created_at: -1});

    res.status(200).json(orders);

  } catch(error){
    res.status(404).json({errors: ["Nenhum pedido encontrado."]});
    return;
  }
}

const getUserOrders = async(req, res) => {
  const user = req.user;

  try{

    const orders = await Order.find({ user: new mongoose.Types.ObjectId(user._id) });

    res.status(200).json(orders);

  } catch(error){
    res.status(404).json({errors: ["Nenhum pedido encontrado"]});
    return;
  }
}

const attOrderStatus = async(req, res) => {
  const {status} = req.body;
  const {id} = req.params;

  try{

    const order = await Order.findById( new mongoose.Types.ObjectId(id));

    order.status = status;

    await order.save();

    res.status(200).json(order);

  } catch(error){
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const cancelOrder = async(req, res) => {
  const {id} = req.params;

  try{

    const order = await Order.findById(new mongoose.Types.ObjectId(id));

    order.request_cancel = true;

    await order.save();

    res.status(200).json(order);

  } catch(error){
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
  }
}

module.exports = {
  getAllOrders,
  getUserOrders,
  attOrderStatus,
  cancelOrder,
}