var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// register endpoints
var references = require('./routes/references');

// middleware to parse the body of input requests
app.use(bodyParser.json());

// routes middleware
app.use('/references', references);

//test url

// app.get('/', function (req, res) {
//     res.status(200).send('OK!');
// });

// start server
app.listen(3000, function (req, res) {
    console.log('Application listening on port 3000')
});

