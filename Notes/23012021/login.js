const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

router.post('/user/login',express.json(), async (req,res,next)=>{
    if(!req.body.username || !req.body.password){
        return next(new Error('missing username or password'));
    };
    const user = await req.db.collection('user').findOne({
        username: req.body.username,
    });
    if (!user){
        return next(new Error('User not exists'))
    }
    const HashedPassword = crypto
        .createHmac('sha256','rbaproject')
        .update(`${req.body.password}.${user.salt}`)
        .digest('hex');
    console.log(HashedPassword);
    if (HashedPassword != user.password){
        return next(new Error('Invalid username or password'))
    }
    
    const token = jwt.sign({
        id:user._id,
    },'rbajwtsecret',{
        expiresIn: '1d',
    });
    res.json({
        token,
    })
});

module.exports=router;