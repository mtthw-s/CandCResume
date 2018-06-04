var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//===================App setup
//mongoose.connect('mongodb://127.0.0.1:27017/tasks/tasks');  
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd+json'}));
app.use(methodOverride());

app.get('/api/getimage/:imageId', function(req, res){
    res.sendfile("./public/res/" + req.params.imageId + ".jpg");
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


app.listen(3100);
console.log("App listening on 3100");