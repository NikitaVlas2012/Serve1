
var http = require('http');
var url = require('url');
const jsonfile = require('jsonfile')
const file = 'index.json'

var querystring = require('querystring');
http.createServer(function (request, response) {   
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', ()=>{
        let params = querystring.parse(body);
        if(params.a_or_l == "avtorise"){
            jsonfile.readFile(file, function (err, obj) {
                if (err) console.error(err)
                var y = obj.name;
                for(i = 0; i < y.length; i++) {
                    var uy = y[i]
                    if(uy[0] != params.name){
                        console.log("gfhkjg");
                        response.write('Not_Acc');
                        response.end();
                    } 
                }   

            })
        };
    });
}).listen(3000);
