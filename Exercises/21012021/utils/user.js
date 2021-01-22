const { Db } = require("mongodb");
const crypto = require('crypto');



// create user
function createUser(){
    let data = req.body;
    db.collection('users').insertOne({data});

}
// get user
function getUser(){
    let data = JSON(req.body);
    db.collection('users').findOne(data.user).toArray();
}
// update user
function updateUser(){
    let data = req.body;
    db.collection('users').updateOne({},{$set:data });
}
// delete user
function deleteUser(){
    db.collection('users').deleteOne({});
}
