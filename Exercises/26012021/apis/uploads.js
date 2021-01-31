const express = require('express');
const app = express();

app.use('/avatars',express.static('./user/avatar'));

module.exports = app;