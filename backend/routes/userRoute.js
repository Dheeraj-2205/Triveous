const express = require('express');
const { register, Login, Logout } = require('../controller/userController');

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(Login);
router.route("/logout").get(Logout)

module.exports = router
