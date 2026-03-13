var http = require('http');
var url = require('url');

// Interfaces
class RoboMontador { montar(){} }
class RoboInspetor { inspecionar(){} }
class LinhaFactory {
    criarMontador(){}
    criarInspetor(){}
}

// Automotiva
class MontadorCarros extends RoboMontador { montar(){ return "Montando carros..."; } }
class InspetorAutomotivo extends RoboInspetor { inspecionar(){ return "Inspecionando peças automotivas..."; } }
class AutomotivaFactory extends LinhaFactory {
    criarMontador(){ return new MontadorCarros(); }
    criarInspetor(){ return new InspetorAutomotivo(); }
}

// Eletrônicos
class MontadorCircuitos extends RoboMontador { montar(){ return "Montando circuitos..."; } }
class InspetorChips extends RoboInspetor { inspecionar(){ return "Inspecionando chips..."; } }
class EletronicosFactory extends LinhaFactory {
    criarMontador(){ return new MontadorCircuitos(); }
    criarInspetor(){ return new InspetorChips(); }
}

// servidor
var callback = function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
    var parts = url.parse(request.url);

    let factory;
    if(parts.pathname == "/automotiva") factory = new AutomotivaFactory();
    else if(parts.pathname == "/eletronicos") factory = new EletronicosFactory();
    else {
        response.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
        response.end("Linha não encontrada");
        return;
    }
    response.end(factory.criarMontador().montar() + "\n" + factory.criarInspetor().inspecionar());
};

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor indústria em http://localhost:3000");