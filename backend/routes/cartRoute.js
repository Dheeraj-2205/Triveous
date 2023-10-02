const express = require('express');
const { createOrder, deleteOrder, allOrders, getSingleOrder, updateOrder, orderHistory } = require('../controller/orderController');
const {isAuthenticated} = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticated,createOrder);
router.route("/order/user").get(isAuthenticated, allOrders);
router
    .route("/order/:id")
    .delete(isAuthenticated,deleteOrder)
    .get(isAuthenticated,getSingleOrder)
    .put(isAuthenticated,updateOrder)


router.route("/order/history").get(isAuthenticated,orderHistory);
module.exports = router

