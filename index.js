
var http = require('http');
var url = require('url');
const { parse } = require(querystring);
http.createServer(function (request, response) {
    console.log('Url: ' + request.url);
    console.log('Тип запроса: ' + request.method);
    console.log(
        'User-Agent: ' + request.headers['user-agent']
    );
    console.log('Все заголовки');
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', ()=>{
        console.log(body);
    });

    response.write('Дратути');
    response.end();
}).listen(3000);
