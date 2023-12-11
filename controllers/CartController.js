const Cart = require("../models/Cart");
const Product = require("../models/Product");

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

    cart.total = 0;

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

    const cart = await Cart.findOne({ user: new mongoose.Types.ObjectId(user._id) });

    var productList = cart.products;

    //const found = productList.some(obj => obj.product.equals(new mongoose.Types.ObjectId(id)));
    const index = productList.findIndex(obj => obj.product.equals(new mongoose.Types.ObjectId(id)));
    if(index !== -1){
      productList[index].amount += 1;
    }
    else{
      productList.push({product: new mongoose.Types.ObjectId(id), amount: 1});
    }

    cart.products = productList;

    await cart.save();

    res.status(200).json(cart);

  } catch(error){
    console.log(error);
    res.status(400).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const removeProductFromCart = async(req, res) => {
  const {id} = req.body; //id do produto
  const user = req.user;

  try{

    const cart = await Cart.findOne({ user: new mongoose.Types.ObjectId(user._id) });

    var productList = cart.products;

    productList = productList.filter(obj => !obj.product.equals(new mongoose.Types.ObjectId(id)));
    
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

    const cart = await Cart.findOne({ user: new mongoose.Types.ObjectId(user._id) });

    var productList = cart.products;

    const index = productList.findIndex(obj => obj.product.equals(new mongoose.Types.ObjectId(id)));

    if(index !== -1){
      productList[index].amount = amount;
    }
    else{
      res.status(400).json({errors: ["Produto não encontrado no carrinho."]});
      return;
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