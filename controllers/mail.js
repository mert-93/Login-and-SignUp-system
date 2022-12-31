const con = require('../database/connection');
const nodemailer = require("nodemailer");
const path = require("path");

exports.sendMail = (req,res)=>{
    console.log(req.body);
    const { email} = req.body.email;

    con.query('SELECT password FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }
        else{
            let mailTransporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                    user: process.env.GMAIL_USER, // your Mailtrap username
                    pass: process.env.GMAIL_PASSWORD, //your Mailtrap password
                }
            })
            
            let details = {
                from: process.env.GMAIL_USER,
                to: email,
                subject: "testing mail",
                text: results
            }
            
            mailTransporter.sendMail(details,(err)=>{
                if(err){
                    console.log("it has an error",err);
                }
                else{
                    console.log(" email sent!!");
                }
            })
        }
    })
}
