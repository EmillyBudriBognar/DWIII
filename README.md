# 🌐 Desenvolvimento Web III — DWIII

Repositório da disciplina **Desenvolvimento Web III** – FATEC. Este projeto demonstra o desenvolvimento de aplicações backend com Node.js, abordando roteamento, manipulação de arquivos, expressões regulares e padrões de projeto.

---

## 🏗️ Estrutura do Projeto

O repositório está organizado em aulas práticas e projetos entregáveis.

## 🏗️ Estrutura de Pastas

- **01-Introducao-Node-04-03** — Introdução ao Node.js: servidores simples, callbacks e leitura de arquivos JSON.
- **02-Rotas-e-JSON-11-03** — Rotas, frontend estático e retorno de dados em JSON.
- **03-Atividade-Design-Patterns** — Atividade prática com padrões de projeto (Factory Method) em Node.js.
- **projeto01** — Servidor HTTP sem framework com roteamento dinâmico e hierarquia de pastas.
- **projeto02** — Sistema de extração de metadados de arquivos Markdown via RegEx.
- **projeto04** — Sistema de validação de links em arquivos usando Node.js e fetch API.

---

## 📌 ATIVIDADES

Conforme o cronograma da disciplina:

**Projeto 01 — 25/03/2026: Sistema Web Backend sem Framework**  
Servidor Node.js que gerencia rotas e serve um site institucional estático (Aura Joias).
- Roteamento dinâmico com módulo `http`.
- Hierarquia de páginas: `/`, `/quemsou`, `/produtos`, `/produtos/prod1`, `/produtos/prod2`, `/produtos/prod3`, `/perguntas`.
- Página `404` personalizada.

**Projeto 02 — 01/04/2026: Sistema de Extração de Metadados com RegEx**  
Script Node.js que lê um arquivo Markdown e extrai referências técnicas (links) com Expressões Regulares.
- Leitura assíncrona com `fs/promises` e `async/await`.
- Extração de nome e URL via RegEx.
- Saída formatada no terminal com `chalk`.

**Projeto 04 — Validação de Links em Arquivos**  
Sistema de validação de links em arquivos usando Node.js, fetch API e tratamento de erros.
- Leitura de arquivos Markdown e extração de links.
- Validação do status HTTP das URLs usando a `fetch` API.
- Execução via interface de linha de comando (CLI).

---

## 📚 AULAS

**Aula 04/03 — Introdução ao Node.js** (`01-Introducao-Node-04-03`)  
Primeiros passos com Node.js: criação de servidores HTTP, uso de callbacks e leitura de arquivos JSON.
- `primeiroServer.js`, `rotaServer.js`, `calback.js`, `abreArquivoJson.js`

**Aula 11/03 — Rotas e JSON** (`02-Rotas-e-JSON-11-03`)  
Criação de rotas com retorno de JSON e servindo frontend estático.
- `server.js`, `app.js`

**Atividade Design Patterns** (`03-Atividade-Design-Patterns`)  
Implementação de padrões de projeto Factory Method em Node.js.
- `VeiculosDeTransporte.js`, `ServidorIndustrial.js`, `ServidorSistema.js`, `Vendas.js`

---

## 💻 Como Executar

**Aulas (padrão):**
```bash
node src/NomeDoArquivo.js
# Acesse: http://localhost:3000
```

**Projeto 01:**
```bash
cd projeto01
node rotaServer.js
# Acesse: http://localhost:3000
```

**Projeto 02:**
```bash
cd projeto02
npm install
npm start
```

**Projeto 04:**
```bash
cd projeto04
npm install
node cli.js arquivos/lista.md
```

---

Por: Emilly Budri Bognar
