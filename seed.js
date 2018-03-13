
// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var project_list =[
  {
  name: "PetStagram",
  description: "App about pets",
  githubRepoUrl: "https://github.com/mvargasvega",
  deployedUrl: "https://github.com/mvargasvega",
  screenshot: "http://via.placeholder.com/350x150",
  languages: "HTML5, CSS, Javascript, Ruby"
  },
  {
  name: "Portfolio Page",
  description: "App about pets",
  githubRepoUrl: "https://github.com/mvargasvega",
  deployedUrl: "https://github.com/mvargasvega",
  screenshot: "http://via.placeholder.com/350x150",
  languages: "HTML5, CSS, Javascript, Ruby"
  },
  {
  name: "Game on a javascript grid",
  description: "App about pets",
  githubRepoUrl: "https://github.com/mvargasvega",
  deployedUrl: "https://github.com/mvargasvega",
  screenshot: "http://via.placeholder.com/350x150",
  languages: "HTML5, CSS, Javascript, Ruby"
  },
  {
  name: "Geoquakes",
  description: "App about pets",
  githubRepoUrl: "https://github.com/mvargasvega",
  deployedUrl: "https://github.com/mvargasvega",
  screenshot: "http://via.placeholder.com/350x150",
  languages: "HTML5, CSS, Javascript, Ruby"
  }
];

db.Project.create(project_list, function(err, project){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new project", project._id)
  process.exit(); // we're all done! Exit the program.
})
