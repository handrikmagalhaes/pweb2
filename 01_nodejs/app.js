// Criando um servidor WEB apenas com NodeJS
const http = require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200, ({"Content-Type": "text/html"}))
    res.write("<h1>Ola mundo NodeJS")
    res.end();
}).listen(3000);