const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/', (req, res)=> {
    res.sendFile(getIndexFilePath('index.html'))
})



app.listen(port, ()=> {
    console.log(`server listening on ${port}`);
})