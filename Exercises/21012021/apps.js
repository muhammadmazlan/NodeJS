const express=require('express');
require('./utils/db');

const app=express();
app.use(express.json());

app.post('/user',async (req,res)=>{
    const user = new User(req.body);
    try{
        res.send('user Created!!');
    }catch(error){
        res.status(400).send(error.message);
    }
});

app.get('/user',async (req,res)=>{
    res.send('You are connected!!')
});

app.put('/user',async (req,res)=>{
    res.send('You are connected!!')
});

app.delete('/user',async (req,res)=>{
    res.send('You are connected!!')
});

app.listen(3000,console.log('Application is listening on port 3000'))
