const joi = require('joi')
const ejs = require('ejs');

class validator{

    static async authLoginValidator(req,res,next){
        try{
            await joi
            .object({
                email: joi.string().max(256).required(),
                password: joi.string().max(256).required(),
            })
            .validateAsync(req.body);
            next();
        }catch(error){
            return res.render('login' ,{
                message: 'eksik veya hatalı bilgi girdiniz'
            })
        }   
    }

    static async authRegisterValidator(req,res,next){
        try{
            await joi
            .object({
                name: joi.string().max(256).required(),
                email : joi.string().max(256).required(),
                password : joi.string().max(256).required(),
                passwordConfirm : joi.string().max(256).required(),
            })
            .validateAsync(req.body);
            next();
        }catch(error){
            return res.render('register' ,{
                message : 'eksik veya hatalı bilgi girdiniz'
            })
        }
    }
}

module.exports=validator;