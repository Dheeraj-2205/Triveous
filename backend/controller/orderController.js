const Order = require("../model/cartModel");
const Product = require('../model/productModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const sendToken = require('../utils/jwtToken');


exports.createOrder = catchAsyncError(async(req,res,next)=>{
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        paidAt : Date.now(),
        user : req.user.id
    });

    res.status(201).json({
        success : true,
        order
    })
})