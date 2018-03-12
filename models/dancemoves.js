// dancemoves.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DanceMovesSchema = new Schema({
     Name: String,
    // you should fill the rest of this in
 });
//Next let's create the Book model from the schema.
var Book = mongoose.model('Book', BookSchema);


//Finally we'll need to export Book from this module (that's this file). You can export it at the very end of the file by doing:
// book.js
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
