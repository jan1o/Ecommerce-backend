const express = require("express");
const router = express.Router();

//controller
const {register, login, getCurrentUser, update, validateUser} = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {userCreateValidation, loginValidation, userUpdateValidation} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

//routes
router.get("/profile", authGuard, getCurrentUser); //GET nos dados de profile do usuário
router.post("/register", userCreateValidation(), validate, register); //Cadastrar um novo usuário
router.post("/login", loginValidation(), validate, login); //Logar no sistema
router.put("/", authGuard, userUpdateValidation(), validate, update); //Put nos dados do usuário (atualizar dados)
router.post("/validateUser", authGuard, validateUser) //verifica se o token de usuário é válido
module.exports = router;