const ErroHandler = require('../utils/errorHandler');
const User = require('../model/userModel');
const catchAsyncError = require('../middleware/catchAsyncError');

exports.register = catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password
    })

    res.status(201).json({
        success : true,
        user
    })
})