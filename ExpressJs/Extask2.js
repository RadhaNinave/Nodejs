const http = require('http');
const express =require('express')
const bodyParser=require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use('/addProduct',(req,res,next)=>{
    res.send("<form action='/product' method='POST'>Enter Product<input type='text' name='title'/><br>Enter Size<input type='text' name='size'/><button type='submit'>AddProduct</button></form>")
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    res.send("<h2>welcome to express</h2>")
})
const server=http.createServer(app);
server.listen(5000)