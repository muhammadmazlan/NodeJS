const express = require('express');
const {MongoClient, ObjectID} = require('mongodb');

const app = express();
const client = new MongoClient('mongodb://127.0.0.1',{ useUnifiedTopology: true });
const connection = client.connect();

// POST - create list
app.post('/todo/create', express.json(),async (req,res)=>{
    console.log('We got your POST request');
    await connection;
    const tasksCollection = client.db('nodeJs').collection('tasks');
    const tasks = await tasksCollection.insertOne({
        task: `${req.body.task}`,
    });
    res.status(201).json({
        state: true
    });
});

// GET - whole tasks list
app.get('/todos', express.json(), async (req,res)=>{
    console.log('We got your GET request');
    await connection;
    const tasksCollection = client.db('nodeJs').collection('tasks');
    const tasks = await tasksCollection.find().toArray();

    res.status(200).json(tasks).end();
});

// PUT - Update list
app.put('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your PUT request');
    await connection;
    const tasksCollection = client.db('nodeJs').collection('tasks');
    const tasks = await tasksCollection.updateOne({_id: ObjectID(`${req.params.id}`)},{$set:{
        task: `${req.body.task}`,
    }});

    res.status(200).json({
        state: true
    }).end();
});
// DELETE - delete task list
app.delete('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your DELETE request');
    await connection;
    const tasksCollection = client.db('nodeJs').collection('tasks');
    const tasks = await tasksCollection.deleteOne({_id: ObjectID(`${req.params.id}`)});

    res.status(200).json({
        state: true,
        id:`${req.params.id}`
    }).end();
});
// GET - single task
app.get('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your GET request-single task');
    await connection;
    const tasksCollection = client.db('nodeJs').collection('tasks');
    const task = await tasksCollection.findOne({_id: ObjectID(`${req.params.id}`)});

    res.status(200).json(task).end();
});
app.listen(3000, console.log('Server Listening on port 3000'))