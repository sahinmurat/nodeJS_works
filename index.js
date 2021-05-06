const express = require("express");
const path = require("path")

const port = process.env.port || 5001;

const app = express();

app.get("/", (req, res) => {
    console.log('come here');
    res.sendFile(path.join(__dirname,'about.html'));
})

app.listen(port, ()=> {
    console.log(`I am listening ${port}` )
})