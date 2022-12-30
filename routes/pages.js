const express = require('express');

const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index');
})

router.get('/register',(req,res) =>{
    res.render('register');
})

router.get('/login', (req,res) =>{
    res.render('login');
})

router.get('/forgot-password', (req,res) =>{
    res.render('forgotPassword');
})

router.get('/admin-panel', (req,res) =>{
    res.render('adminPanel');
})

<<<<<<< Updated upstream
=======
router.get('/user-panel', (req,res) =>{
    res.render('userPanel');
})

>>>>>>> Stashed changes
module.exports = router;