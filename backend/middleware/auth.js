const catchAsyncError = require("./catchAsyncError");
const ErrorHandler  = require('../utils/errorHandler');
const jwt  = require('jsonwebtoken');
const User = require('../model/userModel');

const isAuthenticated = catchAsyncError(async(req,res,next) =>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login First", 401))
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decode.id);

    next();

})

const authorizeRole = (...role) =>{
    return (req,res,next) =>{
        if(!role.includes(req.user.role)){
            next(new ErrorHandler(`you are ${req.user.role} not admin`));
        }
        next();
    }
}



module.exports = {isAuthenticated, authorizeRole}


