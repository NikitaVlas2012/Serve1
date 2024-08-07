const http = require('http');

http.createServer(function (request, response) {
    response.setHeader('UserId', 12);
    response.setHeader(
        'Content-Type',
        'text/html; charset=utf-8;'
    );
    response.write('Дратути');
    response.end();
}).listen(3000);