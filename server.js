const http = require("http");

port = 8081;

http
 .createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<h2>Server Started  1 2 .. </h2>");
    res.end();
 })
 .listen(port, ()=>{
    console.log(`running node server on port : http://localhost:${port}`);
 })