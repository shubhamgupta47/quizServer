var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./config/dbconfig')
var app = express();
var server   = require('http').Server(app);
var quiz = require('./controllers/quiz');
var user = require('./controllers/user');
var result = require('./controllers/result');

app.use(cors());

app.use(bodyParser.json());
// app.use(bodyParser({limit: '50mb'}));
// app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/quiz', quiz);
app.use('/user', user);
app.use('/result', result);

console.log(__dirname);

server.listen(7000,function(){
    console.log("server started on port 7000");
});


module.exports = app;