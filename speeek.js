var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    
    if (request.url === '/favicon.ico' || request.url === '/speeek.ico') {

        fs.readFile('speeek.ico', function (error, data) {
            if(error) {        
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(error + "\n");
                response.end();
                return;
                }

            header = {
                'content-length': data.length,
                'content-type': 'image/x-icon',
                'accept': '*/*' };

            response.writeHead(200, header);
            response.end(data);
            return;
        });
    }

    if (request.url === '/speeek.png') {

        fs.readFile('speeek.png', function (error, data) {
            if(error) {        
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(error + "\n");
                response.end();
                return;
                }

            header = {
                'content-length': data.length,
                'content-type': 'image/png',
                'accept': '*/*' };

            response.writeHead(200, header);
            response.end(data);
            return;
        });
    }

    else if (request.url === '/'){

        fs.readFile('speeek.html', function (error, data) {
            if(error) {        
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(error + "\n");
                response.end();
                return;
                }

            header = {
                'content-length': data.length,
                'content-type': 'text/html',
                'accept': '*/*' };

            response.writeHead(200, header);
            response.end(data);
            return;
        });
    }

    else {


    }
}).listen(80, "127.0.0.1");
console.log('Speeek Server Started!');
