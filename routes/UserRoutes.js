const express = require("express");
const router = express.Router();

//controller
const {register, login, getCurrentUser, update, getUserFavorites, getUserOrders} = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {userCreateValidation, loginValidation, userUpdateValidation} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

//routes
router.get("/profile", authGuard, getCurrentUser); //GET nos dados de profile do usuário
router.get("/profile/products", authGuard, getUserFavorites); //GET nos produtos favoritos do usuário
router.get("/profile/orders", authGuard, getUserOrders); //GET nos pedidos realizados pelo usuário
router.post("/register", userCreateValidation(), validate, register); //Cadastrar um novo usuário
router.post("/login", loginValidation(), validate, login); //Logar no sistema
router.put("/", authGuard, userUpdateValidation(), validate, update); //Put nos dados do usuário (atualizar dados)

module.exports = router;