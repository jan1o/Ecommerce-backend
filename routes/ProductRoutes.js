const express = require("express");
const router = express.Router();

//controllers
const { 
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
} = require("../controllers/ProductController");

//middlewares
const { productCreateValidator, productUpdateValidator} = require("../middlewares/productValidations");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const adminGuard = require("../middlewares/adminGuard");

//routes
router.get("/product/:id", getProductById); //GET produto especifico pelo seu id
router.get("/newest", getNewest); //GET produtos mais novos
router.get("/best", getBest); //GET produtos mais caros
router.get("/search/product/:name", getProductsBySearch); //GET produtos pesquisados pelo usuário
router.get("/search/category/:id", getProductsByCategory); //GET produtos pela categoria pesquisada
router.get("/userFavorites", authGuard, getUserFavorites); //GET nos produtos favoritos do usuário

router.post("/", authGuard, adminGuard, productCreateValidator(), validate, insertProduct); //Cadastrar novo produto
router.put("/like/:id", authGuard, likeProduct); //Usuário favorita produto
router.put("/update/:id", authGuard, adminGuard, productUpdateValidator(), validate, updateProduct); //Atualizar dados de um produto
router.delete("/:id", authGuard, adminGuard, deleteProduct); //Deletar um produto

module.exports = router;