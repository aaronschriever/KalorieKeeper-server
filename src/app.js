const dbconfig = require("../config/dbsettings");
const express = require('express');
const mongoose = require('mongoose');
const assert = require('assert');
const app = express();
var ingredient = require('./routes/ingredient');
var signup = require('./routes/signup');


const url = 'mongodb://' +  dbconfig.username + ":" + dbconfig.password + "@" + dbconfig.servername + ':' + dbconfig.port + "/" + dbconfig.dbname;

mongoose.connect(url, {useNewUrlParser: true});

app.use(express.json());
app.use('/signup', signup);
app.use('/ingredient', ingredient);
app.get('/', function(req, res){
  res.send('hello world');
});



module.exports = app;