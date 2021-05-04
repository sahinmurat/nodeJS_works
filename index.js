const express = require('express');

const app = express()
const port = 5000;
const host = "http://localhost"

app.get("/", (req, res)=>{
    res.send('hello from exprss')
})

app.listen(port, ()=> {
    console.log(`listen ${host}:${port}`)
})