const express = require('express')
const path=require('path')
const bodyParser=require('body-parser')
const app=express();
const adminRoute = require('./admin')
const shopRoute = require('./shop')
const contactRoute=require('./Conatctus')
const successRoute=require('./success')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoute)
app.use(contactRoute)
app.use('/shop',shopRoute)
app.use(successRoute)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(4000)

