const catchAsyncError = require("./catchAsyncError");

const isAuthenticated = catchAsyncError(async(req,res,next) =>{
    const token = req.cookie;

    console.log(token);
})