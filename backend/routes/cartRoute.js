const express = require('express');
const { createOrder } = require('../controller/orderController');
const isAuthenticated = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticated,createOrder)

module.exports = router

