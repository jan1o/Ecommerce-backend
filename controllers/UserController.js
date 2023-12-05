const User = require("../models/User");
const Order = require("../models/Order");
const Product = require("../models/Product");

const { createCart } = require("./CartController");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

//generate user token
const generateToken = (id) => {
  return jwt.sign({id}, jwtSecret, {expiresIn: "7d",});
};

//register user and sign in
const register = async(req, res) => {
  const {name, email, password, confirmpassword} = req.body;

  //check if user exists
  const user = await User.findOne({email});

  if(user) {
    res.status(422).json({errors: ["Por favor utilize outro email."]});
    return;
  }

  //generate password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  //create user
  const newUser = await User.create({
    name: name,
    email,
    password: passwordHash
  });

  if(!newUser){
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }

  const userCreated = await User.findOne({email}).select("-password");
  const cart = createCart(new mongoose.Types.ObjectId(userCreated._id));

  if(!cart){
    await User.deleteOne({ _id: new mongoose.Types.ObjectId(userCreated._id) });
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id)
  })

};

//sign user in
const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  //check if user exists
  if(!user) {
    res.status(422).json({errors: ["O usuário não foi encontrado."]});
    return;
  }

  //check if passowrd matches
  if(!(await bcrypt.compare(password, user.password))){
    res.status(422).json({errors: ["Senha inválida."]});
    return;
  }

  //return user with token
  res.status(201).json({
    _id: user._id,
    token: generateToken(user._id)
  });

};

//get current logged in user
const getCurrentUser = async (req, res) => {
  const user = req.user; //usuário retornado pelo authguard

  res.status(200).json(user);
}

//update an user
const update = async (req, res) => {
  //const {name, password, bio} = req.body;
  const {name, birth, telephone, image, password} = req.body;

  const reqUser = req.user;

  const user = await User.findById(new mongoose.Types.ObjectId(reqUser._id)).select("-password");

  if(name){
    user.name = name;
  }

  if(birth){
    user.birth = birth;
  }

  if(telephone){
    user.telephone = telephone;
  }

  if(image){
    user.image = image;
  }

  if(password){
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    user.password = passwordHash;
  }

  await user.save();

  res.status(200).json(user);
}

const getUserFavorites = async (req, res) => {
  const user = req.user;

  //const favoritosId = user.favorites;

  const favoritos = await Product.find({ likes: new mongoose.Types.ObjectId(user._id) });

  res.status(200).json(favoritos);

}

const getUserOrders = async (req, res) => {
  const user = req.user;

  try{

    const pedidos = await Order.find({ user: new mongoose.Types.ObjectId(user._id)});

    //verificar se algum pedido foi encontrado
    if(!pedidos){
      res.status(404).json({errors: ["Nenhum pedido foi encontrado."]});
      return;
    }

    res.status(200).json(pedidos);

  } catch (error){

    res.status(404).json({errors: ["Pedidos não encontrados."]});
    return;

  }
}

const favoriteProduct = async(user, product) => {
  try {
    
    const usuario = await User.findById(new mongoose.Types.ObjectId(user)).select("-password");

    usuario.favorites.push(new mongoose.Types.ObjectId(product));

    await usuario.save();

    return true;


  } catch (error) {
    return false;
  }
}

const desfavoriteProduct = async(user, product) => {
  try {
    
    const usuario = await User.findById(new mongoose.Types.ObjectId(user)).select("-password");

    //usuario.favorites.push(new mongoose.Types.ObjectId(product));
    usuario.favorites = usuario.favorites.filter(p => p !== new mongoose.Types.ObjectId(product));

    await usuario.save();

    return true;


  } catch (error) {
    return false;
  }
}

module.exports = {
  register,
  login,
  getCurrentUser, 
  update,
  getUserFavorites,
  getUserOrders,
  favoriteProduct,
  desfavoriteProduct,
}
