import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregando configurações
const conf = JSON.parse(fs.readFileSync('./conf.json', 'utf-8'));
const app = express();
const PORT = conf.port || 3000;

app.use(express.json());

// Template Base HTML com Tailwind CSS
const baseHTML = (titulo, conteudo) => `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo} | DWIII</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 min-h-screen">
    <nav class="bg-white border-b border-gray-200">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <span class="text-xl font-600 tracking-tight text-indigo-600">DWIII <span class="text-gray-400 font-light">| Projeto 02 P2</span></span>
                </div>
                <div class="flex items-center space-x-8 text-sm font-medium text-gray-500">
                    <a href="/" class="hover:text-indigo-600 transition-colors">Início</a>
                    <a href="/estoque" class="hover:text-indigo-600 transition-colors">Estoque</a>
                    <a href="/conf" class="hover:text-indigo-600 transition-colors">Config</a>
                    <a href="/adm" class="hover:text-indigo-600 transition-colors">Integridade</a>
                    <a href="/log" class="hover:text-indigo-600 transition-colors">Logs</a>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-5xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">${titulo}</h1>
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            ${conteudo}
        </div>
    </main>
    
    <footer class="max-w-5xl mx-auto px-4 py-8 text-center text-gray-400 text-sm">
        &copy; 2026 - Desenvolvido por Emilly Budri Bognar
    </footer>
</body>
</html>
`;

// Rota Principal (Dashboard)
app.get('/', (req, res) => {
    const conteudo = `
        <div class="p-8">
            <p class="text-gray-600 mb-6 text-lg">Bem-vindo ao sistema de gerenciamento DWIII. Utilize o menu para navegar entre as funções do servidor.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="/estoque" class="block p-6 border border-gray-100 rounded-lg hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
                    <h3 class="font-semibold text-indigo-600 mb-2 group-hover:underline">📦 Gestão de Estoque</h3>
                    <p class="text-sm text-gray-500">Visualize os produtos e quantidades disponíveis no banco de dados.</p>
                </a>
                <a href="/conf" class="block p-6 border border-gray-100 rounded-lg hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
                    <h3 class="font-semibold text-indigo-600 mb-2 group-hover:underline">⚙️ Configurações</h3>
                    <p class="text-sm text-gray-500">Acesse os parâmetros de configuração dinâmica da aplicação.</p>
                </a>
                <a href="/adm" class="block p-6 border border-gray-100 rounded-lg hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
                    <h3 class="font-semibold text-indigo-600 mb-2 group-hover:underline">🛡️ Verificação ADM</h3>
                    <p class="text-sm text-gray-500">Checagem de integridade de arquivos e serviços essenciais.</p>
                </a>
                <a href="/log" class="block p-6 border border-gray-100 rounded-lg hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
                    <h3 class="font-semibold text-indigo-600 mb-2 group-hover:underline">📜 Histórico de Logs</h3>
                    <p class="text-sm text-gray-500">Consulte o registro das últimas análises de saúde do projeto.</p>
                </a>
            </div>
        </div>
    `;
    res.send(baseHTML('Painel de Controle', conteudo));
});

// Rota /estoque
app.get('/estoque', (req, res) => {
    try {
        const dados = JSON.parse(fs.readFileSync('./estoque.json', 'utf-8'));
        let rows = dados.map(p => `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">#${p.id}</td>
                <td class="px-6 py-4 text-sm text-gray-600">${p.nome}</td>
                <td class="px-6 py-4 text-sm text-gray-600">R$ ${p.preco.toFixed(2)}</td>
                <td class="px-6 py-4 text-sm"><span class="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-medium">${p.quantidade} em estoque</span></td>
            </tr>
        `).join('');

        const tabela = `
            <table class="w-full text-left">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                        <th class="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Produto</th>
                        <th class="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Preço</th>
                        <th class="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        `;
        res.send(baseHTML('Estoque de Produtos', tabela));
    } catch (erro) {
        res.send(baseHTML('Erro', `<div class="p-8 text-red-500">Erro ao carregar estoque: ${erro.message}</div>`));
    }
});

// Rota /conf
app.get('/conf', (req, res) => {
    try {
        const dados = JSON.parse(fs.readFileSync('./conf.json', 'utf-8'));
        const html = `
            <div class="p-8 space-y-4">
                <div class="flex justify-between border-b pb-4">
                    <span class="text-gray-500">Nome da Aplicação</span>
                    <span class="font-semibold text-indigo-600">${dados.appName}</span>
                </div>
                <div class="flex justify-between border-b pb-4">
                    <span class="text-gray-500">Porta do Servidor</span>
                    <span class="font-mono bg-gray-100 px-2 py-1 rounded text-sm">${dados.port}</span>
                </div>
                <div class="flex justify-between border-b pb-4">
                    <span class="text-gray-500">Arquivo de Log</span>
                    <span class="text-gray-700">${dados.logFile}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">Versão</span>
                    <span class="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full text-xs font-medium">${dados.version}</span>
                </div>
            </div>
        `;
        res.send(baseHTML('Configurações do Projeto', html));
    } catch (erro) {
        res.send(baseHTML('Erro', `<div class="p-8 text-red-500">Erro ao carregar configurações: ${erro.message}</div>`));
    }
});

// Rota /adm
app.get('/adm', (req, res) => {
    const arquivosEssenciais = ['cli.js', 'leitor.js', 'httpValidacao.js', 'server.js', 'analise.js', 'conf.json', 'estoque.json'];
    const statusArquivos = arquivosEssenciais.map(arq => {
        const existe = fs.existsSync(path.join(__dirname, arq));
        return `
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-700">${arq}</span>
                <span class="${existe ? 'text-green-600' : 'text-red-600'} text-xs font-bold uppercase tracking-widest">
                    ${existe ? '● OK' : '○ Ausente'}
                </span>
            </div>
        `;
    }).join('');

    const html = `
        <div class="p-8">
            <h3 class="text-sm font-semibold text-gray-400 uppercase mb-4">Arquivos do Sistema</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                ${statusArquivos}
            </div>
            <h3 class="text-sm font-semibold text-gray-400 uppercase mb-4">Endpoints Ativos</h3>
            <div class="space-y-2">
                ${['/estoque', '/conf', '/adm', '/log'].map(r => `
                    <div class="text-sm text-gray-600 flex items-center">
                        <div class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        ${r}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    res.send(baseHTML('Verificação de Integridade (ADM)', html));
});

// Rota /log
app.get('/log', (req, res) => {
    try {
        const logPath = path.join(__dirname, conf.logFile || 'log.txt');
        if (fs.existsSync(logPath)) {
            const conteudo = fs.readFileSync(logPath, 'utf-8');
            const html = `
                <div class="p-8 bg-gray-900 text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
                    <pre>${conteudo}</pre>
                </div>
            `;
            res.send(baseHTML('Histórico de Logs', html));
        } else {
            res.send(baseHTML('Logs', '<div class="p-8 text-gray-500 text-center">Nenhum log gerado ainda. Execute o script de análise.</div>'));
        }
    } catch (erro) {
        res.send(baseHTML('Erro', `<div class="p-8 text-red-500">Erro ao carregar logs: ${erro.message}</div>`));
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`App: ${conf.appName}`);
});
