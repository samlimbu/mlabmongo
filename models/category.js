var mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost/categories"); //db.name()
var Schema = mongoose.Schema;
var categorySchema = new Schema({
	"id": Number,
	"name": String
})
mongoose.model('category', categorySchema); //schema name