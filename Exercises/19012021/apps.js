const app = require('express')();
const db = require('./utils/db');

const task = require('./apis/task');  // Tasks API's

app.use(async(req,res,next)=>{
    req.db = await db();
    next();
});

app.use('/',task);

app.listen(3000,()=>console.log('Server is listening on port 3000'));