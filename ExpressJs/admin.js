const express = require('express')
const path=require('path')
const router=express.Router();
const routeDir=require('./util/path')
router.get('/addProduct',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','add-product.html'))
   })
router.use('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

  module.exports =router;