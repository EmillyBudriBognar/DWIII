//carrega os modulos necessarios:
const http = require('http');

//função callback para o servidor http:
var callback = function(request, response){
    //define o cabeçalho(header) com o tipo de resposta:
    response.writeHead(200, {"Content-type": "text/plain"});
    //menssagem de retorno:
    response.end('Ola mundo node ...Fatec217');
}

//criar o servidor http:
var server = http.createServer(callback);
//configura o servidor:
server.listen(3000);
console.log("servidor iniciado em http://localhost:3000");