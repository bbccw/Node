const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rjrithz:rjrithz@cluster0.cuxacxu.mongodb.net/LibraryDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const regSchema = new Schema({
    username:String, 
      password:String,
      Confirmpassword:String,
      email:String,
      phone:String,


})
var registerdata =mongoose.model('registerdata',regSchema)
module.exports=registerdata;