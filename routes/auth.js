const express = require('express');
const authController = require('../controllers/auth');
const authValidator = require('../middleware/authValidation');
const router = express.Router();

router.post('/register',authValidator.authRegisterValidator,authController.register)

router.post('/login', authValidator.authLoginValidator,authController.login)

module.exports = router;