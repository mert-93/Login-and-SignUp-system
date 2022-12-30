const express = require('express');
const authController = require('../controllers/auth');
const authValidator = require('../middleware/authValidation');
const router = express.Router();

router.post('/register',authValidator,authController.register)

router.post('/login', authController.login)

module.exports = router;