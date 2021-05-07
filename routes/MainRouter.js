const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    console.log('main');
    res.render("main", {name : "Murat"})
})

router.get("/add", (req, res) => {
    console.log('main add');
    res.send("main add");
})


module.exports = router;