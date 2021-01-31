const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/user/register',express.json(), async(req,res,next)=>{
    if(!req.body.username || !req.body.password){
        return next(new Error ('Missing Username or password'));
    };

    const user = await req.db.collection('users').findOne({
        username: req.body.username,
    });

    if (user){
        return next(new Error('User Exists'));
    }
    const username = req.body.username;
    const salt = crypto.randomBytes(16).toString('hex');
    const HashedPassword = crypto
        .createHmac('sha256','nodeProject')
        .update(`${req.body.password}.${salt}`)
        .digest('hex');
    
    await req.db.collection('users').insertOne({
        username,
        salt,
        password: HashedPassword,
    });

    res.status(201).json({
        state: true
    });


});

module.exports = router;