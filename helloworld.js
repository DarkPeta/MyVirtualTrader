var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Ola Isabella Maximaal Bonte');
 }).listen(8080);