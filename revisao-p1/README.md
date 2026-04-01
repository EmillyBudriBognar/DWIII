# Revisão P1 — Desenvolvimento Web III

**Aluno:** Emilly Budri Bognar  
**Disciplina:** FATEC-217 — Desenvolvimento Web III  
**Período:** 2026/1

---

## 📋 Descrição

Resolução das atividades de revisão para a Prova P1, abordando os principais conceitos de Node.js: manipulação de arquivos com o módulo `fs`, criação de servidores HTTP e roteamento com o módulo `http`.

---

## 📁 Estrutura de Arquivos

```
revisao-p1/
├── questao01/
│   ├── config.json        # Arquivo de configuração com campus, curso e semestre
│   ├── index.js           # Leitura assíncrona do config.json com fs.readFile
│   └── package.json
│
├── questao02/
│   ├── index.js           # Sistema de log: cria ou atualiza log.txt via fs
│   └── package.json
│
├── questao03/
│   ├── index.js           # Servidor HTTP com rotas / (HTML) e /instituicao (JSON)
│   └── package.json
│
├── questao04/
│   ├── index.js           # Roteador institucional: /fatec, /fecap e 404
│   └── package.json
│
├── questao05/
│   ├── estudantes.csv     # Lista de alunos com Nome e RA
│   ├── index.js           # Lê o CSV e gera export_relatorio.txt com cabeçalho
│   └── package.json
│
└── README.md              # Este arquivo
```

---

## 🚀 Como Executar cada Questão

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior instalado

### Questão 01 — Sistema de Configuração

```bash
cd questao01
npm start
```

> Exibe: `Configuração carregada para o curso [CURSO] no campus [CAMPUS]`

---

### Questão 02 — Sistema de Logs de Laboratório

```bash
cd questao02
npm start
```

> Na primeira execução cria `log.txt`. Nas seguintes, faz append de uma nova linha com data e hora.

---

### Questão 03 — API de Consulta Acadêmica

```bash
cd questao03
npm start
```

Acesse no navegador:
- `http://localhost:3000/` → Resposta HTML com título "Portal de APIs Acadêmicas"
- `http://localhost:3000/instituicao` → JSON com dados da instituição

---

### Questão 04 — Roteador Institucional

```bash
cd questao04
npm start
```

Acesse no navegador:
- `http://localhost:3000/fatec` → `200 OK` — "Bem-vindo à Faculdade de Tecnologia"
- `http://localhost:3000/fecap` → `200 OK` — "Bem-vindo a FATEC Diadema"
- Qualquer outra rota → `404 Not Found` — "Recurso não encontrado no servidor"

---

### Questão 05 — Exportação de Relatório de Alunos

```bash
cd questao05
npm run export
```

> Lê `estudantes.csv` e gera `export_relatorio.txt` com cabeçalho: `Relatório Gerado para FATEC - [Data Atual]`

---

## 🧩 Módulos Utilizados

| Módulo | Tipo | Descrição |
|--------|------|-----------|
| `fs`   | Nativo | Leitura, escrita e append de arquivos |
| `http` | Nativo | Criação de servidores e tratamento de rotas |
| `path` | Nativo | Manipulação de caminhos de arquivo |
