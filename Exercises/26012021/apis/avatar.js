const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/checkAuth');
const {ObjectId} = require('mongodb');

router.use=express.json();
const uploader = multer ({
    storage: multer.diskStorage({
        destination(req, file, cb){
            cb(null, `user/avatar`)
        },
        filename(req, file, cb){
            cb(null, req.user.id + '_' + Date.now()+'_'+`${file.originalname}`)
        }
    })
});

router.post('/user/avatar', checkAuth, uploader.single('avatar'), async (req,res)=>{
    const file = req.file;
    const port = process.env.PORT ? Number(process.env.PORT) : 3000; 
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    await req.db.collection('users')
        .updateOne(
            {_id: ObjectId(req.user.id)},
            {$set: {'avatar':`${file.filename}`,
        'url':`http://localhost:${port}/avatars/${file.filename}`}})
    
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