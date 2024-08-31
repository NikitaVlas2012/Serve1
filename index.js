
var http = require('http');
var url = require('url');
var fc = require('fs');
const jsonfile = require('jsonfile')
const file = 'index.json'
var numbers = 0;
var ep = "0";
var o_t_f_fo = "0";  
var n = "0";
var querystring = require('querystring');
http.createServer(function (request, response) { 
    
    numbers = 0;
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', ()=>{
        let params = querystring.parse(body);
        if(params.a_or_l == "avtorise"){
            jsonfile.readFile(file, function (err, obj) {
                if (err) console.error(err)
                const y = obj.gtw;
                for(i = 0; i < y.length; i++) {
                    var uy = y[i]
                    if(uy[0] == params.name){
                        n = i;
                        numbers = 1; 
                        break;
                    } 
                }
                if(numbers == 0){
                    y.push(params.user);
                    obj.gtw = y;
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

        if(params.a_or_l == "login"){
            jsonfile.readFile(file, function (err, obj) {
                if (err) console.error(err)
                const y = obj.gtw;
                for(i = 0; i < y.length; i++) {
                    var uy = y[i]
                    if(uy[0] == params.name){
                        n = i;
                        if(uy[1] == params.pasword){
                            numbers = 1;
                            ep = uy[2];
                            o_t_f_fo = uy[3];
                        }
                        break;
                    } 
                }
                if(numbers == 1){
                    response.write('Yes');
                    response.end();
                }
                else{
                    response.write('No');
                    response.end();
                }   
            })
        };

        if(params.a_or_l == "ep_data"){
            response.write(ep);
            response.end();
        };

        if(params.a_or_l == "o_t_f_fo_data"){
            response.write(o_t_f_fo);
            response.end();
        };

        if(params.a_or_l == "nu"){
            var bar = '' + n;
            response.write(bar);
            response.end()
        }
        
        if(params.a_or_l[0] == "Sohr"){
            jsonfile.readFile(file, function (err, obj){
                if (err) console.error(err)
                const r = obj.gtw;
                var uu = r[params.a_or_l[1]];
                var uu1 = params.a_or_l[2];
                var uu2 = params.a_or_l[3];
                uu[2] = uu1;
                uu[3] = uu2;
                obj.gtw[params.a_or_l[1]] = uu;
                var jsonata = JSON.stringify(obj);
                var fs = require('fs');
                fs.writeFile("index.json", jsonata, function(err) {
                    if (err) {
                    console.log(err);
                    }
                });
            })
        }
    });
}).listen("https://serve1-git-main-nikitavlas2012s-projects.vercel.app/");
