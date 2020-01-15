var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./config/dbconfig')
var app = express();
var server   = require('http').Server(app);
var questions = require('./controllers/question');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname);

server.listen(7000,function(){
    console.log("server started on port 7000");
    app.use('/questions', questions);
});


module.exports = app;