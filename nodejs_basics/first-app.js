const http = require('http');
const express = require('express')
const app = express();

app.use((res,req,next)=>{
    console.log("in the middleware")
    next();
})
app.use((res,req,next)=>{
    console.log("middleware two");
   res.send("<h1>hello from the middleware two");
})
const server =http.createServer(app);
server.listen(3000);
