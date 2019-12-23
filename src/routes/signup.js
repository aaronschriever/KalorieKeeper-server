const express = require('express');
const router = express.Router();
const addUser = require('../controllers/addUser');
//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

router.get('/', function(req, res, next){
   // console.log("body: ");
    // console.log(req.body);
    res.send("user exists");
}).post('/', addUser );

module.exports = router;