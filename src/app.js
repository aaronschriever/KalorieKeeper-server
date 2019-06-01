const dbconfig = require("../config/dbsettings");
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

const url = 'mongodb://' +  dbconfig.username + ":" + dbconfig.password + "@" + dbconfig.servername + ':' + dbconfig.port + "/" + dbconfig.dbname;


MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  //const db = client.db(dbname);
 
  client.close();
});


app.listen(3000);