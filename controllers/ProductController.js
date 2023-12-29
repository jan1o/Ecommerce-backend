const Product = require("../models/Product");
const User = require("../models/User");

const mongoose = require("mongoose");

//get all products
const getAll = async(req, res) => {
  try {
    
    const produtos = await Product.find({});

    if(!produtos){
      res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
      return;
    }

    res.status(200).json(produtos);

  } catch (error) {
    res.status(404).json({errors: ["Houve um erro, tente mais tarde."]});
    return;
  }
}

//get product by id
const getProductById = async(req, res) => {
  const {id} = req.params;

  try{

    const produto = await Product.findById(new mongoose.Types.ObjectId(id));

    if(!produto){
      res.status(404).json({errors: ["Produto não encontrado."]});
      return;
    }

    res.status(200).json(produto);

  } catch(error){
    res.status(404).json({errors: ["Produto não encontrado."]});
    return;
  }
}

//get last added products
const getNewest = async(req, res) => {
  try{

    const produtos = await Product.find().sort({ createdAt: -1 }).limit(4);

    if(!produtos){
      res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
      return;
    }

    res.status(200).json(produtos);

  } catch(error){
    res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
    return;
  }
}

//get greater price products
const getBest = async(req, res) => {
  try{

    const produtos = await Product.find({}).sort({ price: -1 }).limit(4);

    if(!produtos){
      res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
      return;
    }

    res.status(200).json(produtos);

  } catch(error){
    res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
    return;
  }
}

//get products searched by user
const getProductsBySearch = async(req, res) => {
  const {name} = req.params;

  const produto = name.toLowerCase();

  try{

    const produtos = await Product.find({ name: { $regex: '.*' + produto + '.*' } }).limit(25);

    if(!produtos){
      res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
      return;
    }

    res.status(200).json(produtos);

  } catch(error){
    res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
    return;
  }
}

//get products by category
const getProductsByCategory = async(req, res) => {
  const {id} = req.params;

  try{

    const produtos = await Product.find({ categories: new mongoose.Types.ObjectId(id) }).limit(25);

    if(!produtos){
      res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
      return;
    }

    res.status(200).json(produtos);

  } catch(error){
    res.status(404).json({errors: ["Nenhum produto foi encontrado."]});
    return;
  }
}

const getUserFavorites = async (req, res) => {
  const user = req.user;

  //const favoritosId = user.favorites;

  const favoritos = await Product.find({ likes: new mongoose.Types.ObjectId(user._id) });

  res.status(200).json(favoritos);

}

//insert a new product in DB
const insertProduct = async(req, res) => {
  const {name, description, previousPrice, price, shipping, images, categories, specifications} = req.body;

  //deve ser utilizado esse o toFixed() para evitar um bug na soma dos numeros
  let total = Number(price) + Number(shipping);
  total = total.toFixed(2);

  var categorias = categories.map((element) => {element = new mongoose.Types.ObjectId(element._id)});

  const newProduct = await Product.create({
    name: name.toLowerCase(),
    description,
    previousPrice,
    price,
    shipping,
    total,
    images,
    categories: categorias,
    specifications
  });

  if(!newProduct){
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }

  res.status(201).json({message: ["Produto cadastrado com sucesso."]});
}

//update product
const updateProduct = async(req, res) => {
  const {name, description, previousPrice, price, shipping, images, categories, specifications} = req.body;
  const {id} = req.params

  //categories.forEach(function(index){ this[index] = new mongoose.Types.ObjectId(this[index])}, categories);
  var categorias = categories.map(element => element = new mongoose.Types.ObjectId(element._id));

  try{
    const product = await Product.findById(new mongoose.Types.ObjectId(id));

    if(name){
      product.name = name.toLowerCase();
    }
    if(description){
      product.description = description;
    }
    if(previousPrice){
      product.previousPrice = previousPrice;
    }
    if(price){
      product.price = price;
    }
    if(shipping){
      product.shipping = shipping;
    }
    if(images){
      product.images = images;
    }
    if(categories){
      product.categories = categorias;
    }

    if(specifications){
      product.specifications = specifications;
    }
    
    let total = Number(price) + Number(shipping);
    product.total = total.toFixed(2);

    await product.save();

    res.status(200).json(product);
  } catch(error){
    res.status(422).json({error: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }

}

//delete a product
const deleteProduct = async(req, res) => {
  const {id} = req.params;

  try{

    const product = await Product.findOne({ _id: new mongoose.Types.ObjectId(id) });
    await product.deleteOne();

    res.status(200).json({message: ["Produto deletado com sucesso."]});

  } catch(error){
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

//like a product
const likeProduct = async(req, res) => {
  const {id} = req.params;
  const user = req.user;

  try {
    
    const produto = await Product.findById(new mongoose.Types.ObjectId(id));

    let operation;

    //produto ainda não foi dado like pelo usuário
    if(!produto.likes.includes(new mongoose.Types.ObjectId(user._id))){
      produto.likes.push(new mongoose.Types.ObjectId(user._id));

      const userLike = favoriteProduct(user._id, produto._id);

      if(!userLike){
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
        return;
      }

      operation = "favoritado";
    } else {         
      //produto já foi dado like pelo usuário

      const index = produto.likes.indexOf(new mongoose.Types.ObjectId(user._id));
      produto.likes.splice(index, 1);

      const userDislike = desfavoriteProduct(user._id, produto._id);

      if(!userDislike){
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
        return;
      }

      operation = "desfavoritado";
    }

    await produto.save();

    res.status(200).json({message: ["Produto " + operation + "."]});


  } catch (error) {
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
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
    //usuario.favorites = usuario.favorites.filter(p => p !== new mongoose.Types.ObjectId(product));
    const index = usuario.favorites.indexOf(new mongoose.Types.ObjectId(product));
    usuario.favorites.splice(index, 1);

    await usuario.save();

    return true;


  } catch (error) {
    return false;
  }
}


module.exports = {
  getAll,
  getProductById,
  getNewest,
  getBest,
  getProductsBySearch,
  getProductsByCategory,
  getUserFavorites,
  insertProduct,
  updateProduct,
  deleteProduct,
  likeProduct
}