const con = require('../database/connection');
const bcrypt = require('bcryptjs');
const { name } = require('ejs');
const jwt = require('jsonwebtoken');

exports.register = (req,res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;

    
    con.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('index')
        }else if( password !== passwordConfirm){
            return res.render('index')
        }
        
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        
        con.query('INSERT INTO users SET ? ', {name: name, userType : "user", email: email, password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error);
            }else{
                console.log(results);
                return res.render('userPanel', {data: results})
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
            if(results[0].userType === 'admin'){
                return res.render('adminPanel', {data: results,token:token})}
            else{
                return res.render('userPanel', {data: results,token:token})
            }
        }else{
            return res.render('index')
        }
    });
}
