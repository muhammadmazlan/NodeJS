const { JsonWebTokenError } = require("jsonwebtoken");

const jwt = require('jsonwebtoken');

function auth (req,res,next){
    const authHeader = req.header('Authorization');
    if(authHeader){
        const token = authHeader.replace('Bearer ','');
        const data = jwt.verify(token,'rbajwtsecret');
        req.user=data;
    }
    next();
}

module.exports=auth;