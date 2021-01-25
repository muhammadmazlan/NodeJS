const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const {ObjectId} = require('mongodb');

router.use=express.json();

router.get('/user', checkAuth, async (req,res)=>{
    const user = await req.db.collection('users').findOne({
        _id: ObjectId(req.user.id),
    },{
        projection:{
            salt: 0,
            password: 0
        }
    }
    );
    if (!user){
        return next(new Error('No user found'));
    }
    res.json(user);
});

module.exports = router;