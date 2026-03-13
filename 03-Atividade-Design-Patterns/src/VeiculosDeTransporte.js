// carrega módulos
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Interfaces simuladas
class Veiculo { mover(){} }
class TransporteFactory {
    criarVeiculo1() {}
    criarVeiculo2() {}
}

// Veículos concretos
class Carro extends Veiculo { mover(){ return "Carro andando em alta velocidade..."; } }
class Onibus extends Veiculo { mover(){ return "Ônibus rodando pela cidade..."; } }
class Helicoptero extends Veiculo { mover(){ return "Helicóptero voando entre prédios..."; } }
class Aviao extends Veiculo { mover(){ return "Avião decolando para as nuvens..."; } }

// Fábricas concretas
class TerrestreFactory extends TransporteFactory {
    criarVeiculo1(){ return new Carro(); }
    criarVeiculo2(){ return new Onibus(); }
}
class AereoFactory extends TransporteFactory {
    criarVeiculo1(){ return new Helicoptero(); }
    criarVeiculo2(){ return new Aviao(); }
}

// função callback
var callback = function(request, response){
    var parts = url.parse(request.url);
    var pathName = parts.pathname;

    if (pathName == "/"){
        fs.readFile(path.join(PUBLIC_DIR, "index.html"), function(err, data){
            if(err){
                response.writeHead(404);
                response.end("Página não encontrada");
            } else {
                response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
                response.end(data);
            }
        });

    } else if(pathName == "/terrestre"){
        response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
        let factory = new TerrestreFactory();
        response.end(factory.criarVeiculo1().mover() + "\n" + factory.criarVeiculo2().mover());
    } else if(pathName == "/aereo"){
        response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
        let factory = new AereoFactory();
        response.end(factory.criarVeiculo1().mover() + "\n" + factory.criarVeiculo2().mover());
    } else {
        response.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
        response.end("Modalidade não encontrada");
    }
};

// cria servidor
var server = http.createServer(callback);
server.listen(3000);
console.log("Dashboard Patterns em http://localhost:3000");
