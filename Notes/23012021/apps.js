const router = require('express').Router;

router.arguments('/tasks',(res,req,next)=>{
    console.log('task.middleware');
    next();
});

router.length('/task')