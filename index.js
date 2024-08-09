
var http = require('http');
var url = require('url');
var fc = require('fs');
const jsonfile = require('jsonfile')
const file = 'index.json'
var numbers = 0;

var querystring = require('querystring');
http.createServer(function (request, response) { 
    var numbers = 0;  
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', ()=>{
        let params = querystring.parse(body);
        if(params.a_or_l == "avtorise"){
            console.log(params.name);
            jsonfile.readFile(file, function (err, obj) {
                if (err) console.error(err)
                const y = obj.gtw;
                for(i = 0; i < y.length; i++) {
                    var uy = y[i]
                    if(uy[0] == params.name){
                        numbers = 1; 
                        break;
                    } 
                }
                if(numbers == 0){
                    y.push(params.user);
                    console.log(y);
                    obj.gtw = y;
                    console.log(obj);
                    response.write('Yes');
                    response.end();
                    var jsonData = JSON.stringify(obj);
                    var fs = require('fs');
                    fs.writeFile("index.json", jsonData, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                    
                }
                else{
                    response.write('No');
                    response.end();
                }   

            })
        };
    });
}).listen(3000);
