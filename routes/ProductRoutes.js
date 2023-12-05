const express = require("express");
const router = express.Router();

//controllers
const { 
  getProductById, 
  getNewest, 
  getBest, 
  getProductsBySearch, 
  getProductsByCategory,
  insertProduct,
  updateProduct,
  deleteProduct,
  likeProduct,
  dislikeProduct
} = require("../controllers/ProductController");

//middlewares
const { productCreateValidator, productUpdateValidator, productLikeValidator } = require("../middlewares/productValidations");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const adminGuard = require("../middlewares/adminGuard");

//routes
router.get("/:id", getProductById); //GET produto especifico pelo seu id
router.get("/newest", getNewest); //GET produtos mais novos
router.get("/best", getBest); //GET produtos mais caros
router.get("/search/:name", getProductsBySearch); //GET produtos pesquisados pelo usuário
router.get("/search/category/:name", getProductsByCategory); //GET produtos pela categoria pesquisada

router.post("/", authGuard, adminGuard, productCreateValidator(), validate, insertProduct); //Cadastrar novo produto
router.put("/like", authGuard, productLikeValidator(), validate, likeProduct); //Usuário favorita produto
router.put("/dislike", authGuard, productLikeValidator(), validate, dislikeProduct); //Usuário desfavorita produto
router.put("/:id", authGuard, adminGuard, productUpdateValidator(), validate, updateProduct); //Atualizar dados de um produto
router.delete("/:id", authGuard, adminGuard, deleteProduct); //Deletar um produto

module.exports = router;