// QUESTÃO-05 — Revisão P1 DWIII
// Como parte de uma atividade de automação de dados na FATEC, você deve desenvolver um sistema
// de exportação de listas de alunos. Após inicializar o seu projeto com npm init, crie um script que
// simule a geração de um relatório. O programa deve ler um arquivo chamado estudantes.csv (que você
// deve criar com alguns nomes e RAs) e gerar um novo arquivo chamado export_relatorio.txt. Este novo
// arquivo deve conter o conteúdo original, mas com um cabeçalho adicional:
// "Relatório Gerado para FATEC - [Data Atual]". O script deve ser disparado através de um comando
// personalizado no package.json chamado npm run export, garantindo que o processo de leitura e
// escrita utilize as funções do módulo fs para manipulação de arquivos no servidor.

const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'estudantes.csv');
const relatorioPath = path.join(__dirname, 'export_relatorio.txt');

const dataAtual = new Date().toLocaleDateString('pt-BR');

fs.readFile(csvPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo estudantes.csv:', err.message);
    return;
  }

  const cabecalho = `Relatório Gerado para FATEC - ${dataAtual}\n${'='.repeat(45)}\n\n`;
  const conteudoFinal = cabecalho + data;

  fs.writeFile(relatorioPath, conteudoFinal, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Erro ao gerar o relatório:', writeErr.message);
      return;
    }
    console.log(`Relatório gerado com sucesso: export_relatorio.txt`);
    console.log(`Cabeçalho: "Relatório Gerado para FATEC - ${dataAtual}"`);
  });
});
