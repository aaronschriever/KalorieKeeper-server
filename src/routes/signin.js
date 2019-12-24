const express = require('express');
const router = express.Router();
const cookieHandler = require('./../controllers/cookieHandler');
const signin = require("./../controllers/signin");
const User = require("./../models/user");
router.get('/', function(req, res, next){
   // console.log("body: ");
   // console.log(req.body);
    res.send("cookie cookie!");
}).post('/', cookieHandler, signin);

module.exports = router;