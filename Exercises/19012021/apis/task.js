const express = require('express');
const router = express.Router();
const {ObjectID} = require('mongodb');
router.use=express.json();

// POST - create list
router.post('/todo/create', express.json(),async (req,res)=>{
    console.log('We got your POST request');
    try{
    const tasks = await req.db.collection('tasks').insertOne({
        task: `${req.body.task}`,
    });
    
    res.status(201).json({
        state: true
    });
    } catch (err){
        res.status(500).send(message);
    };
});
// GET - whole tasks list
router.get('/todos', express.json(), async (req,res)=>{
    console.log('We got your GET request');
    try{
    const tasks = await req.db.collection('tasks').find().toArray();
    
    res.status(200).json(tasks).end();
    } catch (err){
        res.status(500).send(message);
    }
});
// PUT - Update list
router.put('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your PUT request');
    try{
    const tasks = await req.db.collection('tasks').updateOne({_id: ObjectID(`${req.params.id}`)},{$set:{
        task: `${req.body.task}`,
    }});
    
    res.status(200).json({
        state: true
    }).end();

    } catch (err){
        res.status(500).send(message);
    };
});
// DELETE - delete task list
router.delete('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your DELETE request');
    try {
    const tasks = await req.db.collection('tasks').deleteOne({_id: ObjectID(`${req.params.id}`)});
    
    res.status(200).json({
        state: true,
        id:`${req.params.id}`
    }).end();
    } catch (err){
        res.status(500).send(message);
    }
});
// GET - single task
router.get('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your GET request-single task');
    try {
        const task = await req.db.collection('tasks').findOne({_id: ObjectID(`${req.params.id}`)});
        res.status(200).json(task).end();
    } catch (err){
        res.status(500).send(message);
    }
});

module.exports = router;