// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/mvargasvega/MartinApi/blob/master/README.md",
    baseUrl: "https://secure-refuge-11585.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/project", description: "Index of all projects"}, // CHANGE ME
      {method: "POST", path: "/api/project", description: "Create a new project entry"}, // CHANGE ME
      {method: "PUT", path: "/api/project/:id", description: "Edit a previous project entry and update it"}, // CHANGE ME
      {method: "DELETE", path: "/api/project/:id", description: "Destroy a project"} // CHANGE ME
    ]
  })
});

app.get("/api/profile", function apiIndex(req, res) {
  res.json({
    name: "Martin Vargas Vega",
    githubUsername: "mvargasvega",
    githublink: "https://github.com/mvargasvega/MartinApi",
    githubProfileImage: "https://avatars0.githubusercontent.com/u/29615926?s=460&v=4",
    personalSiteLink: "Coming soon, need to buy the domain and set it up =o",
    currentCity: "San Francisco",
    hobbies: [{name: "Dance", type: "Bachata & Salsa"},{name:"Traveling", type:"Africa & Europe"},{name:"Sleeping", type:"Until at least 9 =D"}]

  })
});



//LIST -- Fetch all projects
app.get('/api/Project', function(req,res) {
  //send all projects as JSON response
  console.log("I kind of work")
  db.Project.find().populate()
  .exec(function(err, Project){
    if (err) { return console.log("index error: "+err); }
    res.json(Projects);
  });
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
