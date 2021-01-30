const express = require('express');
const {MongoClient, ObjectID} = require('mongodb');

const app = express();
const client = new MongoClient('mongodb://127.0.0.1');
const connection = client.connect();

// create list
app.post('/todo/create', express.json(), async (req,res)=>{
    await connection.db('nodeJs');
    
})