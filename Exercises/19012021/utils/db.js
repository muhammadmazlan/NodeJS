const express = require('express');
const {MongoClient,ObjectId} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');
const app = express();
app.use = express.json();

// create task
app.get()