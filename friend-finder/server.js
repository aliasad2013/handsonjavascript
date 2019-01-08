var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// suggestions endpoints
var suggestions = require('./routes/suggestions');

//middleware to parse the body of input requests
app.use(bodyParser.json());

// route middleware
app.use('/suggestions', suggestions);

// start server
app.listen(3000, () => {
    console.log('Application listening to port 3000');
});