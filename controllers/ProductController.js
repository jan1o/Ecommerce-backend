const Product = require("../models/Product");

const mongoose = require("mongoose");

//get product by id
const getProductById = async(req, res) => {
  const {id} = req.params;

  try{

    const produto = await Product.findById(mongoose.Types.ObjectId(id));

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

    const produtos = await Product.find().sort({ created_at: -1 }).limit(5);

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

    const produtos = await Product.find().sort({ price: -1 }).limit(5);

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

  try{

    const produtos = await Product.find({ name: { $regex: '.*' + name + '.*' } }).limit(25);

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
  const {category} = req.params;

  try{

    const produtos = await Product.find({ category: category }).limit(25);

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

//insert a new product in DB
const insertProduct = async(req, res) => {
  const {name, description, previousPrice, price, shipping, images, categories} = req.body;

  const total = price + shipping;

  const newProduct = await Product.create({
    name,
    description,
    previousPrice,
    price,
    shipping,
    total,
    images,
    categories
  });

  if(!newProduct){
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }

  res.status(201).json({message: ["Produto cadastrado com sucesso."]});
}

//update product
const updateProduct = async(req, res) => {
  const {_id, name, description, previousPrice, price, shipping, images, categories} = req.body;

  try{
    const product = await Product.findById(mongoose.Types.ObjectId(_id));

    if(name){
      product.name = name;
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
      product.categories = categories;
    }

    product.total = price + shipping;

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

    const product = await Product.deleteOne({ _id: mongoose.Types.ObjectId(id) });

    res.status(200).json({message: ["Produto deletado com sucesso."]});

  } catch(error){
    req.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

module.exports = {
  getProductById,
  getNewest,
  getBest,
  getProductsBySearch,
  getProductsByCategory,
  insertProduct,
  updateProduct,
  deleteProduct
}