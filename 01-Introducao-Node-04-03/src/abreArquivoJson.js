// carrega os módulos necessários
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// caminhos
var PUBLIC_DIR = path.join(__dirname, '..', 'public');
var DATA_DIR = path.join(__dirname, '..', 'data');

// função para ler arquivo e enviar na resposta
function readFile(response, folder, file, contentType){
    var filePath = path.join(folder, file);
    fs.readFile(filePath, function(err, data){
        if(err){
            response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
            response.end("Arquivo não encontrado");
        } else {
            response.writeHead(200, {"Content-Type": contentType});
            response.end(data);
        }
    });
}

// função callback
var callBack = function(request, response){

    var parts = url.parse(request.url);
    var pathName = parts.pathname;

    if(pathName == "/"){
        readFile(response, PUBLIC_DIR, "index.html", "text/html; charset=utf-8");

    } else if(pathName == "/rota1/cadastro"){
        readFile(response, DATA_DIR, "cadastro.json", "application/json; charset=utf-8");

    } else if(pathName == "/rota1/catalogo"){
        readFile(response, DATA_DIR, "catalogo.json", "application/json; charset=utf-8");

    } else if(pathName == "/rota1/dados"){
        readFile(response, DATA_DIR, "dados.json", "application/json; charset=utf-8");

    } else {
        response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
        response.end("Rota não encontrada");
    }
};

// cria o servidor
var server = http.createServer(callBack);

// configura o servidor
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");