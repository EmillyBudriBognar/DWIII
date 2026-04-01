// QUESTÃO-01 — Revisão P1 DWIII
// Você foi designado para criar um sistema de configuração para um projeto da FATEC.
// O primeiro passo é preparar o ambiente: inicialize um novo projeto Node.js em uma pasta exclusiva
// utilizando o comando npm init. Em seguida, crie manualmente um arquivo chamado config.json
// contendo as chaves "campus", "curso" e "semestre". Desenvolva um script index.js que utilize o
// módulo nativo fs para ler esse arquivo de forma assíncrona e, após a leitura bem-sucedida, exiba no
// console a mensagem: "Configuração carregada para o curso [CURSO] no campus [CAMPUS]".

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');

fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo config.json:', err.message);
    return;
  }

  const config = JSON.parse(data);
  console.log(`Configuração carregada para o curso ${config.curso} no campus ${config.campus}`);
});
