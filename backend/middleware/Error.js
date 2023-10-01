const ErrorHandler = require('../utils/errorHandler');

module.exports = (err,req,res,next) =>{
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.name === "CastError"){
        const message = `Resource is not correct ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        error : err,
        success : false
    })

}