const con = require('../database/connection');
const nodemailer = require("nodemailer");
const path = require("path");

exports.sendMail = (req,res)=>{
    console.log(req.body);
    const { email} = req.body.email;

    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: 'neknefosta@gufum.com', // your Mailtrap username
            pass: 'abcdefgh123' //your Mailtrap password
        }
    })
    
    let details = {
        from: "neknefosta@gufum.com",
        to: email,
        subject: "testing mail",
        text: "test mail sended"
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
