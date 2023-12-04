const Cart = require("../models/Cart");

const mongoose = require("mongoose");

const getUserCart = async(req, res) => {
  const user = req.user;

  try{

    const cart = await Cart.find({ user: new mongoose.Types.ObjectId(user._id)});

    if(!cart){
      res.status(404).json({errors: ["Carrinho Vazio."]});
      return;
    }

    res.status(200).json(cart);

  } catch(error){
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const emptyCart = async(req, res) => {
  const {id} = req.body;

  try{

    const cart = await Cart.findById(new mongoose.Types.ObjectId(id));

    if(!cart){
      res.status(404).json({errors: ["Carrinho não encontrado."]});
      return;
    }

    cart.products = [];

    await cart.save();
    
    res.status(200).json(cart);

  } catch(error){
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const addProductToCart = async(req, res) => {
  const {id} = req.body; //id do produto
  const user = req.user;

  try{

    const cart = await Cart.find({ user: new mongoose.Types.ObjectId(user._id) });

    const productList = cart.products;

    if(productList.find(p => p.name === new mongoose.Types.ObjectId(id))){
      productList[0][new mongoose.Types.ObjectId(id)].amount += 1;
    }
    else{
      productList.push({product: new mongoose.Types.ObjectId(id), amount: 1});
    }

    cart.products = productList;

    await cart.save();

    res.status(200).json(cart);

  } catch(error){
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const removeProductFromCart = async(req, res) => {
  const {id} = req.body; //id do produto
  const user = req.user;

  try{

    const cart = await Cart.find({ user: new mongoose.Types.ObjectId(user._id) });

    const productList = cart.products;

    productList.filter(p => p.product !== new mongoose.Types.ObjectId(id));
    
    cart.products = productList;

    await cart.save();

    res.status(200).json(cart);

  } catch(error){
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const updateProductAmount = async(req, res) => {
  const {id, amount} = req.body;
  const user = req.user;

  try{

    const cart = await Cart.find({ user: new mongoose.Types.ObjectId(user._id) });

    const productList = cart.products;

    if(productList.find(p => p.name === new mongoose.Types.ObjectId(id))){
      productList[0][new mongoose.Types.ObjectId(id)].amount = amount;
    }

    cart.products = productList;

    await cart.save();

    res.status(200).json(cart);

  } catch(error){
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

module.exports = {
  getUserCart,
  emptyCart,
  addProductToCart,
  removeProductFromCart,
  updateProductAmount,
}