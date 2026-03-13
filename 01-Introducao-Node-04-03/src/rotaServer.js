// carrega os módulos necessários
var http = require('http');
var url = require('url');

// função callback para o servidor
var callback = function(request, response){

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    // faz o parse da URL
    var parts = url.parse(request.url);

    if(parts.pathname == "/"){
        response.end("Site Principal...");
    } 
    else if(parts.pathname == "/rota1"){
        response.end("Rota 1...");
    } 
    else if(parts.pathname == "/rota2"){
        response.end("Rota 2...");
    } 
    else {
        response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
        response.end("Erro 404\nNão encontrado: " + parts.pathname);
    }
};

// criar servidor
var server = http.createServer(callback);

// configurar servidor
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");