const express = require('express');
const { createProduct, singleProduct, getAllProduct, deleteProduct } = require('../controller/productController.js');
const router = express.Router();

router.route("/products").post(createProduct)
router.route("/product/:id").get(singleProduct)
router.route("/all/products").get(getAllProduct)


module.exports = router


