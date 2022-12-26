const express = require('express');
const mailController = require('../controllers/mail');
const router = express.Router();

router.post('/forgotpassword',mailController.sendMail )

module.exports = router;