// QUESTÃO-02 — Revisão P1 DWIII
// Para monitorar o uso de um laboratório na FATEC, precisamos de um sistema de logs.
// Inicialize um projeto Node.js e configure o arquivo package.json para que o script principal seja
// executado através do comando npm start. O desafio consiste em criar um código que verifique a
// existência de um arquivo chamado log.txt. Caso o arquivo exista, o programa deve ler o conteúdo e
// adicionar ao final (append) uma nova linha com o texto "Novo acesso registrado em: " seguido da
// data e hora atual do sistema. Caso o arquivo não exista, o script deve criá-lo automaticamente
// com a primeira entrada de log.

const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'log.txt');
const dataHoraAtual = new Date().toLocaleString('pt-BR');
const novaEntrada = `Novo acesso registrado em: ${dataHoraAtual}\n`;

fs.access(logPath, fs.constants.F_OK, (err) => {
  if (err) {
    // Arquivo não existe — cria com a primeira entrada de log
    fs.writeFile(logPath, novaEntrada, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Erro ao criar o arquivo log.txt:', writeErr.message);
        return;
      }
      console.log('Arquivo log.txt criado com a primeira entrada de log.');
      console.log(novaEntrada.trim());
    });
  } else {
    // Arquivo existe — adiciona nova linha ao final (append)
    fs.appendFile(logPath, novaEntrada, 'utf8', (appendErr) => {
      if (appendErr) {
        console.error('Erro ao atualizar o arquivo log.txt:', appendErr.message);
        return;
      }
      console.log('Nova entrada adicionada ao log.txt com sucesso.');
      console.log(novaEntrada.trim());
    });
  }
});
