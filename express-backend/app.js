var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 4200;
var cors = require('cors');


var itemRouter = require('./src/routes/itemRouter');


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', itemRouter) //this is the root of the application

app.listen(port, function(){
  console.log('Server is running on Port:',port);
})
