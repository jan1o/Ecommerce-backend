const express = require("express");
const router = express.Router();

//controllers
const { getUserCart, emptyCart, addProductToCart, removeProductFromCart, updateProductAmount } = require("../controllers/CartController");

//middlewares
const { addProductValidator, removeProductValidator, cartAmountValidator } = require("../middlewares/cartValidations");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");

//routes
router.get("/", authGuard, getUserCart); //GET carrinho do usuário logado

router.put("/", authGuard, emptyCart); //Esvaziar carrinho de compras
router.put("/addProduct", authGuard, addProductValidator(), validate, addProductToCart); //Adicionar produto ao carrinho
router.put("/removeProduct", authGuard, removeProductValidator(), validate, removeProductFromCart); //Remover produto do carrinho
router.put("/updateProductAmount", authGuard, cartAmountValidator(), validate, updateProductAmount); //Atualizar quantidade de um produto no carrinho


module.exports = router;