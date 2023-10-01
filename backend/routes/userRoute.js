const express = require('express');
const { register, Login } = require('../controller/userController');

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(Login);

module.exports = router
