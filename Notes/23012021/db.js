const{MongoClient,ObjectId} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017',{ useUnifiedTopology: true });

const connectProcess = client.connect();

async function db(){
    await connectProcess;

    return client.db('rba');
}
module.exports = db;