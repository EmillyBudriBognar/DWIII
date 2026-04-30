import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregando configurações
const conf = JSON.parse(fs.readFileSync('./conf.json', 'utf-8'));
const PORT = conf.port || 3000;
const logPath = path.join(__dirname, conf.logFile || 'log.txt');

async function realizarAnalise() {
    console.log('Iniciando análise de saúde do projeto...');
    
    let relatorio = `--- ANÁLISE DE SAÚDE DO PROJETO [${new Date().toLocaleString()}] ---\n`;

    // 1. Verificação de arquivos
    const arquivos = ['cli.js', 'leitor.js', 'httpValidacao.js', 'server.js', 'conf.json', 'estoque.json'];
    relatorio += 'VERIFICAÇÃO DE ARQUIVOS:\n';
    arquivos.forEach(arq => {
        const existe = fs.existsSync(path.join(__dirname, arq));
        relatorio += `- ${arq}: ${existe ? 'OK' : 'AUSENTE'}\n`;
    });

    // 2. Verificação de rotas (Tenta conectar se o servidor estiver rodando)
    relatorio += '\nVERIFICAÇÃO DE ROTAS (STATUS CODES):\n';
    const rotas = ['/estoque', '/conf', '/adm', '/log'];
    
    for (const rota of rotas) {
        try {
            const response = await fetch(`http://localhost:${PORT}${rota}`);
            relatorio += `- Rota ${rota}: ${response.status} (${response.statusText})\n`;
        } catch (erro) {
            relatorio += `- Rota ${rota}: ERRO DE CONEXÃO (O servidor está ligado?)\n`;
        }
    }

    relatorio += '-----------------------------------------------------------\n\n';

    // Salvando no log.txt (Append)
    try {
        fs.appendFileSync(logPath, relatorio);
        console.log(`Análise concluída com sucesso! Resultados salvos em: ${conf.logFile}`);
    } catch (erro) {
        console.error('Erro ao salvar log:', erro.message);
    }
}

realizarAnalise();
