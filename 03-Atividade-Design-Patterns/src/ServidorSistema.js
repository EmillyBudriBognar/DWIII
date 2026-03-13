var http = require('http');
var url = require('url');

// Interfaces
class Botao { desenhar(){} }
class Janela { abrir(){} }
class SOFactory {
    criarBotao(){}
    criarJanela(){}
}

// Windows
class BotaoWindows extends Botao { desenhar(){ return "Botão estilo Windows"; } }
class JanelaWindows extends Janela { abrir(){ return "Janela estilo Windows"; } }
class WindowsFactory extends SOFactory {
    criarBotao(){ return new BotaoWindows(); }
    criarJanela(){ return new JanelaWindows(); }
}

// Mac
class BotaoMac extends Botao { desenhar(){ return "Botão estilo Mac"; } }
class JanelaMac extends Janela { abrir(){ return "Janela estilo Mac"; } }
class MacFactory extends SOFactory {
    criarBotao(){ return new BotaoMac(); }
    criarJanela(){ return new JanelaMac(); }
}

// Linux
class BotaoLinux extends Botao { desenhar(){ return "Botão estilo Linux"; } }
class JanelaLinux extends Janela { abrir(){ return "Janela estilo Linux"; } }
class LinuxFactory extends SOFactory {
    criarBotao(){ return new BotaoLinux(); }
    criarJanela(){ return new JanelaLinux(); }
}

// servidor
var callback = function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
    var parts = url.parse(request.url);

    let factory;
    if(parts.pathname == "/windows") factory = new WindowsFactory();
    else if(parts.pathname == "/mac") factory = new MacFactory();
    else if(parts.pathname == "/linux") factory = new LinuxFactory();
    else {
        response.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
        response.end("SO não encontrado");
        return;
    }
    response.end(factory.criarBotao().desenhar() + "\n" + factory.criarJanela().abrir());
};

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor multiplataforma em http://localhost:3000");
