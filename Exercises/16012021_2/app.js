const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Schema
const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    due: {
        type: Date,
        required: true
    }
});

// Model
const Task = mongoose.model('Task',TaskSchema);

// DB Connection
const db = mongoose.connect('mongodb://127.0.0.1:27017/nodeJs',{ useUnifiedTopology: true, useNewUrlParser: true });

// POST - create list

app.post('/todo/create', express.json(),async (req,res)=>{
    console.log('We got your POST request');
    await db;
    const task = await new Task({
        task: `${req.body.task}`,
        due: `${req.body.due}`,
    }).save();
    res.status(201).json({
        state: true
    });
    mongoose.close();
});

// GET - whole tasks list
app.get('/todos', express.json(), async (req,res)=>{
    console.log('We got your GET request');
    await db;
    const tasks = await Task.find();
    res.status(200).json(tasks).end();
    mongoose.close();
});

// PUT - Update list
app.put('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your PUT request');
    await db;
    const task = await Task.findById(`${req.params.id}`);
    task.task = `${req.body.task}`;
    task.due = `${req.body.due}`;
    const updateTask = await task.save();
    res.status(200).json({
        state: true
    }).end();
    mongoose.close();
});

// DELETE - delete task list
app.delete('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your DELETE request');
    await db;
    const task = await Task.findById(`${req.params.id}`);
    await task.delete();

    res.status(200).json({
        state: true,
        id:`${req.params.id}`
    }).end();
    mongoose.close();
});

// GET - single task
app.get('/todo/:id', express.json(), async (req,res)=>{
    console.log('We got your GET request-single task');
    await db;
    const task = await Task.findById(`${req.params.id}`);

    res.status(200).json(task).end();
    mongoose.close();
});
app.listen(3000, console.log('Server Listening on port 3000'))