const express = require('express')
const router=express.Router();

router.get('/addProduct',(req,res,next)=>{
    res.send("<form action='/admin/add-product' method='POST'>Enter Product<input type='text' name='title'/><br>Enter Size<input type='text' name='size'/><button type='submit'>AddProduct</button></form>")
})
router.use('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

  module.exports =router;