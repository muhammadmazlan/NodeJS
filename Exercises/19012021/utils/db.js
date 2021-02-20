const{MongoClient,ObjectID} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017',{ useUnifiedTopology: true });

const connectdb = client.connect();

async function db(){
    await connectdb;
    return client.db('nodeJs');
}
module.exports=db;