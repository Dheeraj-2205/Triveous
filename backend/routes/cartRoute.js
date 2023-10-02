const express = require('express');
const { createOrder, deleteOrder, allOrders, getSingleOrder } = require('../controller/orderController');
const isAuthenticated = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticated,createOrder);
router.route("/order/user").get(isAuthenticated, allOrders);
router
    .route("/order/:id")
    .delete(isAuthenticated,deleteOrder)
    .get(isAuthenticated,getSingleOrder);

module.exports = router

