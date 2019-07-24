var express=require('express');
var app=express();
var session=require('express-session')
var bodyparser=require("body-parser");
var express = require('express');
const multer = require('multer');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var fileSystem = require('fs');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var MongoClient = require('mongodb').MongoClient;

//MongoClient.connect("mongodb://localhost:27017/datacreate");
var db=mongoose.connection
app.use(bodyparser.json());

app.get('/mp', function (req,res){
	////console.log(req.body[0])
	res.setHeader('Cache-control','no-cache');
	res.sendFile(__dirname+'/index.html')

});



app.listen(9001);

console.log('9001');

console.log("Server started");
