const http = require("http");
const hostname ="localhost";
const port = 3000;
const server =http.createServer((req,res) =>{
        res.statusCode=200;
        res.setHeader(`Content-Type`,`text/html`);
        res.end(`
        <html>
        <body>
        <h2>Hello World!!</h2>
        <h1 style="color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;">Server connection successfull :) </h1>
        </body>
        </html>
        `);
})
server.listen(port,hostname,()=>{
        console.log(`server running at http://${hostname}:${port}`);
})

