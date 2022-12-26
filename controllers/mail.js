const con = require('../database/connection');
const nodemailer = require("nodemailer");
const path = require("path");


exports.sendMail = (req,res)=>{
    console.log(req.body);

    const { email} = req.body.email;

    let mailTransporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"uavnot2001@gmail.com",
            pass:"skydreamercoderhope1453"
        }
    })
    
    let details = {
        from: "uavnot2001@gmail.com",
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






