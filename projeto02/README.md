# Projeto 02 — Sistema de Extração de Metadados

**Aluno:** Emilly Budri Bognar  
**Disciplina:** FATEC-217 — Desenvolvimento Web III  
**Período:** 2026/1

---

## 📋 Descrição

Este projeto consiste em um script Node.js que lê um arquivo Markdown (`Projeto2_arquivo.md`), extrai todas as referências técnicas (links) utilizando **Expressões Regulares (RegEx)** e exibe os resultados de forma formatada no terminal.

### Funcionalidades

- ✅ **Leitura Assíncrona** com `fs/promises` e `async/await`
- ✅ **Extração com RegEx** — captura simultaneamente o nome e a URL de cada referência
- ✅ **Tratamento de Erros** com `try/catch` e alertas visuais destacados via `chalk`
- ✅ **Saída Formatada** exibindo `Referência: [NOME] | Link: [URL]` para cada item encontrado

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior instalado

### Passos

1. Clone o repositório ou navegue até a pasta `projeto02`:
   ```bash
   cd projeto02
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o script:
   ```bash
   npm start
   ```
   ou diretamente:
   ```bash
   node app.js
   ```

---

## 📁 Estrutura de Arquivos

```
projeto02/
├── app.js                 # Lógica principal do sistema
├── package.json           # Configuração do projeto e dependências
├── Projeto2_arquivo.md    # Arquivo Markdown com as 10 referências técnicas
└── README.md              # Este arquivo
```

---

## 🧩 Dependências

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| [chalk](https://www.npmjs.com/package/chalk) | ^5.4.1 | Estilização colorida de saída no terminal |
