const express = require('express')
const bodyParser=require('body-parser')
const app=express();
const adminRoute = require('./admin')
const shopRoute = require('./shop')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoute)

app.use('/shop',shopRoute)
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page not found</h2>')
})
app.listen(4000)