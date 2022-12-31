const con = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req,res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;
    
    con.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('register', {
                message: 'That email is already in use'
            })
        }else if( password !== passwordConfirm){
            return res.render('register', {
                message: 'Password do not match'
            })
        }
        
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        
        con.query('INSERT INTO users SET ? ', {name: name, email: email, password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error);
            }else{
                console.log(results);
                return res.render('register', {
                    message: 'User registered'
                })
            }
        })
    });
}

exports.login = (req,res) => {
    console.log(req.body);

    const { email, password } = req.body;

    con.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }
        console.log(results);
        if(results.length > 0 && await bcrypt.compare(password, results[0].password)){
            const payload = {
                UserID: results[0].Id,
              };
              const token = jwt.sign(payload, req.app.get('api_key'), {
                expiresIn: '7d'
              });
            return res.render('index', {message: 'Logged in succesfully as a ' + email,token:token})
        }else{
            return res.render('login', {message: 'Email or Password is incorrect'})
        }
    });
}
