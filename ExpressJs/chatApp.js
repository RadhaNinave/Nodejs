
const fs=require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app=express();


app.use(bodyParser.urlencoded({extended:false}))


app.get('/login',(req,res,next)=>{
    
   
    res.send("<form  action='/'  method='GET' onSubmit='localStorage.setItem(`username`,document.getElementById(`username`).value)'  ><input type='text' name='username' id='username'/><button type='submit'>Login</button></form>")
   
 })

app.get('/',(req,res,next)=>{
        fs.readFile("username.txt",(error,data)=>{
            if(error)
            {
                console.log(error)
                data="no data"
            }
            res.send(`${data}<form action="/" onSubmit = "document.getElementById('username').value=localStorage.getItem('username')" method="Post">
   
            <input id="message" name="message" type="text">
            <input id="username" name="username" type="hidden">
            <button type="submit">Send</button>
         
            </form>`
            )
            console.log("inside get");
        })
       
    })
        
    

app.post("/",(req,res,next)=>{
    console.log("last")
    console.log(req.body.username)
    console.log((req.body.message))
    fs.writeFileSync('username.txt',`${req.body.username} : ${req.body.message}`, {flag : 'a'})
   
    res.redirect('/');
   

})


app.listen(4000)
 

