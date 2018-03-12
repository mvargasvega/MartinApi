var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app
app.set('views', __dirname + 'views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// Set CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Homepage -- Display a list of current todos and a form
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/views/index.html')
});


//in production use the production port, otherwise use 3000 (for development)
app.listen(process.env.PORT || 3000, function () {
   console.log('App listening at http://localhost:3000/');
 });
