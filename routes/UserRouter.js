const express = require('express');
const router = express.Router();

const data = require('../models/data')

router.get("/", (req, res) => {
    console.log('user');
    res.render("user", {users : data.userList})
})

router.get("/add", (req, res) => {
    console.log('user add');
    res.send("user add");
})


module.exports = router;