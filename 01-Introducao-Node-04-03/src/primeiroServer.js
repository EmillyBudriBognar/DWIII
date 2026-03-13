//Carrega os modulos necessarios:
const http= require('http');

//criar um servidor htto oara o envio de msg:
var server = http.createServer(function(request, response){
    //define o cabeçalho(header) com o tipo de resposta:
    response.writeHead(200, {"Content-type": "text/plain"})

    //Mensagem de retorno:
    response.end('Ola Mundo node ...Fatec217')
}
)

//configuração do server:
server.listen(3000);
console.log("servidor Iniciado em http://localhost:3000");