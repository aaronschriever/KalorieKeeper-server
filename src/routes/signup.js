const express = require('express');
const router = express.Router();
const addUser = require('../controllers/addUser');
const cookieHandler = require("./../controllers/cookieHandler");

router.get('/', function(req, res, next){

}).post('/', addUser, cookieHandler);

module.exports = router;