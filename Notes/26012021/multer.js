const { Router } = require('express');
const multer = require('multer');
// 1st initialise 
const uploader = multer();

//memory mode
Router.post('/users/avatar', //path
    uploader.single(<fieldname),
    req,res) => {
    console.log(req.file);
    await fs.writeFile('/filename', req.file.buffer)
    })