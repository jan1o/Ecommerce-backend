const Category = require("../models/Category");

const mongoose = require("mongoose");

const getAllCategories = async(req, res) => {
  try{

    const categorias = await Category.find({});

    if(!categorias){
      res.status(404).json({errors: ["Nenhuma categoria foi encontrada."]});
      return;
    }

    res.status(200).json(categorias);

  } catch(error){
    console.log(error);
  }
}

const getCategoryById = async(req, res) => {
  const {id} = req.params;

  try{

    const categoria = await Category.findById(new mongoose.Types.ObjectId(id));

    if(!categoria){
      res.status(404).json({errors: ["Nenhuma categoria foi encontrada."]});
      return;
    }

    res.status(200).json(categoria);

  } catch(error){
    console.log(error)
  }
}

const createCategory = async(req, res) => {
  const {name, image} = req.body;

  try{

    const categoria = await Category.findOne({ name: name });

    if(categoria){
      res.status(422).json({errors: ["Existe uma categoria com esse nome, tente outra vez."]});
      return;
    }

    const newCategoria = await Category.create({
      name,
      image
    });

    if(!newCategoria){
      res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
      return;
    }

    res.status(201).json({message: ["Categoria criada com sucesso."]});

  } catch(error){
    console.log(error);
  }
}

const updateCategory = async(req, res) => {
  const {id} = req.params;
  const {name, image} = req.body;

  try{

    const categoria = await Category.findById(new mongoose.Types.ObjectId(id));

    if(name){
      categoria.name = name;
    }
    if(image){
      categoria.image = image;
    }

    await categoria.save();

    res.status(200).json(categoria);

  } catch(error){
    res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

const removeCategory = async(req, res) => {
  const {id} = req.params;

  try {
    
    const categoria = await Category.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

    res.status(200).json({message: ["Categoria deletada com sucesso."]})

  } catch (error) {
    req.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]});
    return;
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  removeCategory
}