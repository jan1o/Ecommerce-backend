const Product = require("../models/Product");

const mongoose = require("mongoose");

//get product by id
const getProductById = async(req, res) => {
  const {id} = req.params;
}

//get last added products
const getNewest = async(req, res) => {
  return;
}

//get greater price products
const getBest = async(req, res) => {
  return;
}

//get products searched by user
const getProductsBySearch = async(req, res) => {
  return;
}

//get products by category
const getProductsByCategory = async(req, res) => {
  return;
}

//insert a new product in DB
const insertProduct = async(req, res) => {
  return;
}

//update product
const updateProduct = async(req, res) => {
  return;
}

//delete a product
const deleteProduct = async(req, res) => {
  return;
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