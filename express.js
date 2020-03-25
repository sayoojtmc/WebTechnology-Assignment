var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we d in movies.js
var convert = require('./convert.js');

//Use the Ruter sub route /movies
app.use('/convert', convert);
app.listen(3000);