const app = require('express')();
const db = require('./utils/db');
const auth = require('./middleware/auth');

const register = require('./apis/register');
const login = require('./apis/login');
const users = require('./apis/get');

app.use(async(req,res,next)=>{
    req.db = await db();
    next();
});
app.use(auth);

app.use('/',login);
app.use('/',register);
app.use('/',users);

app.use((err,req,res,next)=>{
    console.log(err.message);
    console.log(err.stack);
    res.status(400).json({
        message: err.message
    })
});


module.exports=app;