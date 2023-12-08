const express = require("express");
const router = express.Router();

//controllers
const { getAllOrders, getUserOrders, attOrderStatus, cancelOrder } = require("../controllers/OrderController");

//middlewares
const { updateStatusValidator } = require("../middlewares/orderValidations");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const adminGuard = require("../middlewares/adminGuard");

//routes
router.get("/", authGuard, adminGuard, getAllOrders); //GET todos os pedidos
router.get("/userOrders", authGuard, getUserOrders); //GET pedidos do usuário logado

router.put("/updateOrder/:id", authGuard, adminGuard, updateStatusValidator(), validate, attOrderStatus); //Atualizar status do pedido
router.put("/cancelOrder/:id", authGuard, cancelOrder); //Usuário cancela a compra

module.exports = router;