// QUESTÃO-04 — Revisão P1 DWIII
// Como parte de uma atividade de infraestrutura na FATEC, você deve criar um roteador institucional
// em Node.js utilizando o módulo http. O servidor deve ser capaz de distinguir requisições para três
// destinos: /fatec, respondendo com o texto "Bem-vindo à Faculdade de Tecnologia"; /fecap,
// respondendo com "Bem-vindo a FATEC Diadema"; e qualquer outra rota acessada deve retornar um
// erro 404 personalizado com a mensagem "Recurso não encontrado no servidor". O foco aqui é a
// lógica de tratamento da URL da requisição (req.url) e o envio dos códigos de status HTTP corretos.

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.url === '/fatec') {
    res.writeHead(200);
    res.end('Bem-vindo à Faculdade de Tecnologia');
  } else if (req.url === '/fecap') {
    res.writeHead(200);
    res.end('Bem-vindo a FATEC Diadema');
  } else {
    res.writeHead(404);
    res.end('Recurso não encontrado no servidor');
  }
});

server.listen(PORT, () => {
  console.log(`Roteador institucional rodando em http://localhost:${PORT}`);
  console.log('Rotas disponíveis:');
  console.log(`  GET http://localhost:${PORT}/fatec  → 200 OK`);
  console.log(`  GET http://localhost:${PORT}/fecap  → 200 OK`);
  console.log(`  Qualquer outra rota               → 404 Not Found`);
});
