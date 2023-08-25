const http = require("http");
const fs = require('fs');
const home=fs.readFileSync("index.html")
const about=fs.readFileSync("about.html")
const pages=fs.readFileSync("pages.html")
const services=fs.readFileSync("services.html")
const contacts=fs.readFileSync("contacts.html")
const hostname = '127.0.0.1';
const port = 3060;
const server =http.createServer((req,res) =>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        url=req.url;
        if(url=='/'){
                res.end(home);
        }
        else if (url=='/about') {
               res.end(about) 
        }
        else if (url=='/pages') {
                res.end(pages) 
         }
         else if (url=='/services') {
                res.end(services) 
         }
         else if (url=='/contacts') {
                res.end(contacts) 
         }
         else if (url=='/about') {
                res.end(about) 
         }
      

})
server.listen(port,hostname,()=>{
        console.log(`server running at http://${hostname}:${port}`);
})

