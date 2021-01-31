const app = require('./apps');
require('dotenv').config({path: '.env'});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port,()=>console.log(`Server is listening on port ${port}`));