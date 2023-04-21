const express = require('express')
const path=require('path')
const router=express.Router();
const routeDir=require('./util/path')
router.get('/contactUs',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','contactUs.html'))
    
   })
   router.use('/contactUs',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success')
})
    


  module.exports =router;