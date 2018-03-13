/* This file acts as the source of all data by importing the models
 * and connecting the app to the database.
 * You won't need to repeat any code here in any other file.
 * Simply import this module wherever you need to connect to your database!
 *
 * http://mongoosejs.com/docs/guide.html
**/
var mongoose = require('mongoose');
var Project = require('./Project');

// Connect to the database
// The name of the database will be 'todo_demo'
// mongoose.connect('mongodb://localhost/project_demo', {promiseLibrary: global.Promise});

// Export so that other modules can 'require' this one.
// https://darrenderidder.github.io/talks/ModulePatterns/#/
module.exports = {
    Project : Project
  };
