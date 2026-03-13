// Carregar módulos necessários
var http = require('http');
var url = require('url');
var fs = require('fs');

// função para ler arquivos
function readFile(response, file, contentType) {
    fs.readFile(file, function (err, data) {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Erro ao abrir o arquivo " + file);
        } else {
            response.writeHead(200, { "Content-Type": contentType });
            response.end(data);
        }
    });
}

// função callback do servidor
var callBack = function (request, response) {

    var parts = url.parse(request.url);
    var path = parts.pathname;

    if (path == "/") {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Servidor Node.js funcionando");

    } else if (path == "/pdf") {
        readFile(response, "arquivo.pdf", "application/pdf");

    } else if (path == "/jpg") {
        readFile(response, "arquivo.jpg", "image/jpg");

    } else if (path == "/json") {
        readFile(response, "arquivo.json", "application/json");

    } else if (path == "/html") {
        readFile(response, "arquivo.html", "text/html");

    } else {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Página não encontrada");
    }
}

// criar servidor
var server = http.createServer(callBack);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000");