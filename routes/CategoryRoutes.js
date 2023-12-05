const express = require("express");
const router = express.Router();

//controllers
const { getAllCategories, getCategoryById, createCategory, updateCategory, removeCategory  } = require("../controllers/CategoryController");

//middlewares
const { categoryCreateValidator, categoryUpdateValidator } = require("../middlewares/categoryValidations");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const adminGuard = require("../middlewares/adminGuard");

//routes
router.get("/", getAllCategories); //GET todas as categorias
router.get("/:id", authGuard, adminGuard, getCategoryById); //GET categoria especifica

router.post("/", authGuard, adminGuard, categoryCreateValidator(), validate, createCategory); //Cadastrar nova categoria
router.put("/:id", authGuard, adminGuard, categoryUpdateValidator(), validate, updateCategory); //Atualizar dados de uma categoria
router.delete("/:id", authGuard, adminGuard, removeCategory); //Deletar uma categoria

module.exports = router;