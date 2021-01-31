const jwt = require('jsonwebtoken');

function auth (req,res,next){
    const authHeader = req.header('Authorization');
    if(authHeader){
        const token = authHeader.replace('Bearer ','');
        const data = jwt.verify(token,'userSecret');
        req.user=data;
    }
    next();
}

module.exports=auth;