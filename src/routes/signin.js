const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

router.get('/', function(req, res, next){
   // console.log("body: ");
   // console.log(req.body);
    res.send("cookie cookie!");
}).post('/', function(req, res, next){
   // console.log(req);
    res.send(`signed in as  ${req.body.username}`);
});

module.exports = router;