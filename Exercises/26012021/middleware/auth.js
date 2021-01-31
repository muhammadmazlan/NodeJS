const jwt = require('jsonwebtoken');

function auth (req,res,next){
    const authHeader = req.header('Authorization');
    if(authHeader){
        const token = authHeader.replace('Bearer ','');
        const data = jwt.verify(token,process.env.JWT_KEY);
        req.user=data;
    }
    next();
}

module.exports=auth;