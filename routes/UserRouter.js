const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    console.log('user');
    res.send("user")
})

router.get("/add", (req, res) => {
    console.log('user add');
    res.send("user add");
})


module.exports = router;