const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rjrithz:rjrithz@cluster0.cuxacxu.mongodb.net/LibraryDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
 
const BookSchema = new Schema({
    Title:String,
    author: String,
    login:String,
    ISBN:String,
    Publisher:String,
    Publicationyear:String,
   Edition:String,
   Numberofpages:String,
   Language:String,



})

var Bookdata =mongoose.model('bookdata',BookSchema)
module.exports=Bookdata;