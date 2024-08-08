
var http = require('http');
var url = require('url');
const fs = require('fs')

var querystring = require('querystring');
http.createServer(function (request, response) {   
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', ()=>{
        let params = querystring.parse(body);
        if(params.a_or_l == "avtorise"){
            console.log(params);
        };
    });

    response.write('Дратути');
    response.end();
}).listen(3000);
