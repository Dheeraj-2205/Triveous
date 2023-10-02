const express = require('express');
const { createProduct, singleProduct, getAllProduct, deleteProduct } = require('../controller/productController.js');
const {isAuthenticated,authorizeRole} = require('../middleware/auth.js');

const router = express.Router();

router.route("/products").post(isAuthenticated,authorizeRole("admin"),createProduct)
router.route("/product/:id").get(singleProduct)
router.route("/all/products").get(isAuthenticated,getAllProduct)


module.exports = router


