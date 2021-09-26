
const bcrypt = require('bcryptjs');
const User = require('../model/User');
// const jwt = require('jsonwebtoken');


exports.addUser = (req, res) => {
    
    try {
        const { username, email, password, password2 } = req.body
        
        User.findOne({email: email}, (err, user) => {
            if (user) {
                res.status(400).json({
                    success: false,
                    msg: `Email ${email} already exists`
                })
            }else if(password !== password2){
                res.status(400).json({
                    success: false,
                    msg: "password doesn't match"
                })
            }else{

                bcrypt.hash(password, 8 , (err, hashPassword) => {

                    const newUser = new User({
                        username,
                        email,
                        password: hashPassword
                    })

                    newUser.save(err => {
                        if (err) {
                            res.status(404).json({
                                success: false,
                                msg: "Auth Falied",
                            })
                        }else{
                            res.status(201).json({
                                success: true,
                                msg: "Register Successfull",
                            })
                        }
                    })
                })
            }
        })
    } catch (err) {

        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
        
    }

}











exports.getUser = async (req, res) => {
    
    try {
        const email = req.body.email;
        const password = req.body.password;

        // if(!email || !password){
        //     return res.status(404).json({
        //         success: false,
        //         err:'Please add email and password'
        //     })
        // }

        User.findOne({email: email}, (err, user) => {
            if (!user) {
                return res.status(404).json({
                    success:false,
                    err:'Invalid Email or Password'
                })
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    return res.status(200).json({
                        success:true,
                        msg:'Login Successfull'
                    })

                }else{
                    return res.status(404).json({
                        success:false,
                        err:'Invalid Email or Password'
                    })
                }
            })
        })
        
        
    } catch (err) {
         
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
        
    }

}