const Order = require("../model/cartModel");
const Product = require('../model/productModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const sendToken = require('../utils/jwtToken');
const ErrorHandler = require('../utils/errorHandler');


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
});


exports.getSingleOrder = catchAsyncError(async(req,res,next)=>{
    
    const {id} = req.params;

    const order = await Order.findById(id).populate("user", "name email");
    
    if(!order){
        return next(new ErrorHandler("Order is not found  with this Id", 401))
    }
    res.status(200).json({
        success : true,
        order
    })
});


exports.allOrders = catchAsyncError(async(req,res,next)=>{

    const order = await Order.find({user:req.user._id})

    res.status(200).json({
        success : true, 
        order
    })
})

exports.updateOrder = catchAsyncError(async (req,res,next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler("This product is already delivered" , 404));
    };

    order.orderStatus = req.body.status;

    if(req.body.status=== "Delivered"){
        order.deliveredAt = Date.now();
    };

    await order.save({ validateBeforeSave : false });

    res.status(200).json({
        success : true
    })
})

exports.deleteOrder = catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id);
    
    if(!order){
      return next(new ErrorHandler("Order is not found", 404));
    }
    await order.deleteOne();
  
    res.status(200).json({
      success : true,
      order
  
    })
});


exports.orderHistory = catchAsyncError(async(req,res)=>{
    const order = await Order.find({orderStatus : "Delivered"});

    res.status(200).json({
        success: true,
        order
    })
})

  