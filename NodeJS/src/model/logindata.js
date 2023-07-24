const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rjrithz:rjrithz@cluster0.cuxacxu.mongodb.net/LibraryDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const loginSchema = new Schema({
    username:String,
    password:String,
})
var logindata =mongoose.model('logindata',loginSchema)
module.exports=logindata;