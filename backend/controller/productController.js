const Products = require('../model/productModel.js');
const ErrorHander = require('../utils/errorHandler.js');
const asyncErrorHandler = require('../middleware/catchAsyncError.js');

exports.createProduct = asyncErrorHandler(async(req,res,next) =>{

    const product = await Products.create(req.body);

    res.status(201).json({
        success : true,
        product
    })
});

exports.singleProduct = asyncErrorHandler(async(req,res,next)=>{

    try {
        const product = await Products.findById(req.params.id);

        if(!product){
            return next(new ErrorHander("Product Not Found" , 404))
        }

        res.status(200).json({
            success : true,
            product
        })


    } catch (error) {
        return next(new ErrorHander("Internal server error" , 500))
    }
})
// exports.deleteProduct = async (req, res, next) => {
//     const { id } = req.params;
  
//     const product = await Products.findById(id);
  
//     if (!product) {
//       return next(new ErrorHander("Product Not Found", 404));
//     }
//     await Products.findByIdAndDelete(id);
//     res.status(200).json({
//       success: true,
//       message: "Delete the Product",
//     });
// };
  
exports.getAllProduct = asyncErrorHandler(async(req,res,next)=>{

    const products = await Products.find();

    res.status(200).json({
        success : true,
        products
    })
})