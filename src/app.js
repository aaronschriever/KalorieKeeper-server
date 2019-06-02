const dbconfig = require("../config/dbsettings");
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();

const url = 'mongodb://' +  dbconfig.username + ":" + dbconfig.password + "@" + dbconfig.servername + ':' + dbconfig.port + "/" + dbconfig.dbname;


MongoClient.connect(url,{ useNewUrlParser:true}, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  client.close();
});

app.get('/', function(req, res){
  res.send('hello world');
});




module.exports = app;