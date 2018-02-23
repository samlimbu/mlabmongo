var express = require('express');
var bodyParser =require('body-parser');
var cors = require('cors'); //to use differenct domain name, CORS Module
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');

var categoryRouter = require('./routes/category');

mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected',()=>{
     console.log('Connected to databse ' + config.database);
})

var app=express(config.database);
app.use(cors());
app.use(express.static(path.join(__dirname,'static')));
app.use(bodyParser.json());

app.get('/', categoryRouter);

var ip = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP ||'localhost';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);