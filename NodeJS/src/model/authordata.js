const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rjrithz:rjrithz@cluster0.cuxacxu.mongodb.net/LibraryDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const authorSchema = new Schema({
    author:String,
    publisher:String,
    language:String,
    publicationYear:String,

})
var authordata =mongoose.model('authordata',authorSchema)
module.exports=authordata;
