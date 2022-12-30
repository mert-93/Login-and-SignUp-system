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

router.get('/user-panel', (req,res) =>{
    res.render('userPanel');
})

router.get('/userPanel', (req,res) =>{
    res.render('userPanel');
})

module.exports = router;