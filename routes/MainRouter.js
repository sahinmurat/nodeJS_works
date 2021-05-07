const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    console.log('main');
    res.render("main", {name : req.query.name})
})

router.get("/main", (req, res) => {
    console.log('main add');
    res.send("main add");
})


module.exports = router;