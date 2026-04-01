// QUESTÃO-03 — Revisão P1 DWIII
// Desenvolva um servidor Node.js que simule uma API de consulta acadêmica. O servidor deve escutar
// na porta 3000 e possuir duas rotas principais: ao acessar a raiz (/), o aluno deve receber uma
// resposta em formato HTML com o título "Portal de APIs Acadêmicas". Ao acessar a rota /instituicao,
// o servidor deve retornar um objeto JSON contendo as informações:
// { "nome": "Faculdade Tecnológica de São Paulo", "cidade": "São Paulo", "status": "online" }.
// Certifique-se de configurar corretamente o Content-Type para cada tipo de resposta (HTML e JSON).

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <title>Portal de APIs Acadêmicas</title>
        </head>
        <body>
          <h1>Portal de APIs Acadêmicas</h1>
          <p>Bem-vindo ao portal da FATEC. Acesse <a href="/instituicao">/instituicao</a> para consultar os dados.</p>
        </body>
      </html>
    `);
  } else if (req.url === '/instituicao') {
    const dados = {
      nome: 'Faculdade Tecnológica de São Paulo',
      cidade: 'São Paulo',
      status: 'online',
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(dados));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Rota não encontrada.');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Rotas disponíveis:');
  console.log(`  GET http://localhost:${PORT}/           → HTML`);
  console.log(`  GET http://localhost:${PORT}/instituicao → JSON`);
});
