const http = require('http');
const express = require('express')
const app = express();

app.use((req,res,next)=>{
    console.log("in the middleware")
    next();
})
app.use((req,res,next)=>{
    console.log("middleware two");
   res.send("<h1>hello from the middleware two");
})
const server =http.createServer(app);
server.listen(3000);
