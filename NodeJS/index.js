
const express = require('express')
const app = express()
const bookdata = require('./src/model/bookdata')
const registerdata = require('./src/model/registerdata')
const logindata = require('./src/model/logindata')
const authordata = require('./src/model/authordata')

app.set('views', './src/views')

app.get('/', function (request, response) {
   response.render('library.ejs')
})
app.get('/login', function (request, response) {
   response.render('login.ejs')
})
app.get('/author',function (request, response){
   response.render('author.ejs')
})
app.get('/save-author',function (request, response) {
   const data4 = {
      author:request.query.author,
      publisher:request.query.publisher,
      language:request.query.language,
      publicationYear:request.query.publication_year


   }
   authordata(data4).save().then((data)=>{
      console.log(data)
})
})


app.get('/save-login', function (request, response) {
   const data3 = {
      username: request.query.username,
      password: request.query.password,

}
logindata(data3).save().then((data)=>{
 console.log(data)
})
})
app.get('/register', function (request, response) {

   response.render('register.ejs')
   

})
app.get('/addbook', function (request, response) {
   response.render('addbook.ejs')

})

app.get('/save-addbook', function (request, response) {
  const data2 = {
   Title: request.query.title,
   author: request.query.author,
   ISBN: request.query.isbn,
   Publisher: request.query.publisher,
   Publicationyear: request.query.publication_year,
   Edition:request.query.edition,
   Numberofpages:request.query.pages,
   Language:request.query.language,

  }

  bookdata(data2).save().then((data)=>{
   console.log(data);
  })
  
})

app.get('/save-register', function (request, response) {
   const data1 = {
      username: request.query.username,
      password: request.query.password,
      Confirmpassword: request.query.Confirmpassword,
      email: request.query.email,
      phone: request.query.phone,
   }
  
   registerdata(data1).save().then((data)=>{
      console.log(data)
})
})

app.get('/get-books',async(req,res)=>{
   try {
      const bookDetails = await bookdata.find()  // find method is userd to get all data from that given table 
      res.render('books.ejs',{bookDetails})
   } catch (error) {
      console.log("error");
   }
   
   
})

app.get('/get-login',async(req,res)=>{
   try {
      const loginDetails = await logindata.find() 
      console.log(loginDetails);
   } catch (error) {
      console.log("error");
   }
})

app.get('/get-register',async(req,res)=>{
   try {
      const registerDetails = await registerdata.find() 
      console.log(registerDetails);
      res.render('viewregistr.ejs',{registerDetails})
   } catch (error) {
      console.log("error");
   }
})

app.get('/get-author',async(req,res)=>{
   try {
      const authorDetails = await authordata.find() 
      console.log(authorDetails);
      res.render('viewauthor.ejs',{authorDetails})
   } catch (error) {
      console.log("error");
   }
})

app.get('/delete/:id',(request,response)=>{
   const id = request.params.id
   authordata.deleteOne({_id:id}).then((details)=>{
      response.redirect('/get-author')
   })
})

app.get('/delete-user/:id',(request,response)=>{
   const id = request.params.id 
   registerdata.deleteOne({_id:id}).then((details)=>{
      response.redirect('/get-register')

})
})

app.get('/delete-users/:id',(request,response)=>{
   const id = request.params.id 
   bookdata.deleteOne({_id:id}).then((details)=>{
      response.redirect('/get-books')

})
})

app.get('/edit-reg/:id',(request,response)=>{
   const id = request.params.id
   registerdata.findOne({_id:id}).then((details)=>{
      response.render('editreg.ejs',{details})
   })
})

app.get('/editauthor/:id',(request,response)=>{
   const id = request.params.id
   authordata.findOne({_id:id}).then((details)=>{
      response.render('editauthor.ejs',{details})
   })
})

app.get('/editbooks/:id',(request,response)=>{
   const id = request.params.id
   bookdata.findOne({_id:id}).then((details)=>{
      response.render('editbooks.ejs')
})
})

app.get('/update-author',(req,res)=>{
   var update ={
      author:req.query.author,
      publisher:req.query.publisher,
      language:req.query.language,
      publicationYear:req.query.publication_year
   }   
   const id = req.query._id
   console.log(update)
   authordata.updateOne({_id:id},{$set:update}).
   then((data)=>{
      console.log(data)
      res.redirect('/get-author')
   })
})

app.get('/update-reg',(req,res)=>{
   var update ={
      username:req.query.username,
      password:req.query.password,
      Confirmpassword: req.query.Confirmpassword,
      email: req.query.email,
      phone: req.query.phone,
   }
   console.log(update)
   const id = req.query._id
   registerdata.updateOne({_id:id},{$set:update}).
   then((data)=>{
      res.redirect('/viewregistr')
   })
})



app.listen(3000, () => { console.log("http://localhost:3000"); })






























// const HTTP = require("http")
// HTTP.createServer(function(request,response){
//     response.write("NEW ddd WORLssssssssssssdfgdfgdgdfgdfggededeD")
//     response.end()
// }).listen(3000,function()
// {console.log("server started at part http://localhost:3000")})