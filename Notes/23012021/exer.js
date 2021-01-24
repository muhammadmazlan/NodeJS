const app = require('express')();
const db = require('./db');
const auth = require('./auth');

const userRegister = require('./reg');
const userLogin = require('./login');
const userGet = require('./get');

app.use(async(req,res,next)=>{
    req.db = await db();
    next();
});
app.use(auth);

app.use('/',userLogin);
app.use('/',userRegister);
app.use('/',userGet);

app.use((err,req,res,next)=>{
    console.log(err.message);
    console.log(err.stack);
    res.status(400).json({
        message: err.message
    })
})

module.exports=app;