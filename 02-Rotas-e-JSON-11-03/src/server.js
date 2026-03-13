var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// caminhos das pastas
var PUBLIC_DIR = path.join(__dirname, '..', 'public');
var DATA_DIR = path.join(__dirname, '..', 'data');

//função para ler arquivos
function readFile(response, folder, file) {
    var filePath = path.join(folder, file);

    fs.readFile(filePath, function (err, data) {

        if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("Arquivo não encontrado");
            return;
        }

        response.end(data);
    });
}

//callback do servidor
var callback = function (request, response) {

    var parts = url.parse(request.url);
    var pathName = parts.pathname;

    if (pathName == "/") {
        readFile(response, PUBLIC_DIR, "index.html");

    } else if (pathName == "/rota1") {
        readFile(response, DATA_DIR, "cadastro.json");

    } else if (pathName == "/script.js") {
        readFile(response, PUBLIC_DIR, "script.js");

    } else if (pathName == "/index.css") {
        readFile(response, PUBLIC_DIR, "index.css");

    } else if (pathName == "/jpg") {
        readFile(response, PUBLIC_DIR, "cat.jpg");

    } else if (pathName == "/pdf") {
        readFile(response, PUBLIC_DIR, "CV_EmillyBudriBognar.pdf");

    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Rota não encontrada");
    }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000");