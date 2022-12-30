const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path:'./.env'});

const app = express();


const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}))

app.use(express.json());

app.set('view engine', 'ejs');


app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/mail',require('./routes/mail'));


app.listen(5000,() =>{
    console.log("Server is running on port 5000")
});