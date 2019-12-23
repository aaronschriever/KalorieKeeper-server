const dbconfig = require("../config/dbsettings");
const express = require('express');
const mongoose = require('mongoose');
const assert = require('assert');
const app = express();
var ingredient = require('./routes/ingredient');
var signup = require('./routes/signup');
var signin = require('./routes/signin');

const url = 'mongodb://' +  dbconfig.username + ":" + dbconfig.password + "@" + dbconfig.servername + ':' + dbconfig.port + "/" + dbconfig.dbname;

try {
  mongoose.connect(url, {useNewUrlParser: true});
} catch (error) {
  console.log("error " + error);
}


app.use(express.json());
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/ingredient', ingredient);
app.get('/', function(req, res){
  res.send('hello world');
});



module.exports = app;