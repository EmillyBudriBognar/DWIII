# Projeto 02 P2 — Expansão CLI & Backend

Este projeto expande a ferramenta de linha de comando (CLI) desenvolvida anteriormente, integrando-a a uma estrutura completa de backend com Node.js e Express. O sistema valida a conectividade de URLs, traduz códigos HTTP para mensagens legíveis e conta com rotas dinâmicas e um sistema de logs automatizado.

## 🚀 Funcionalidades

- **CLI (Interface de Terminal)**: Captura URLs ou caminhos de arquivos para validação de links.
- **Validação HTTP**: Checa o status de cada URL e traduz para mensagens customizadas (Verde para 200, Vermelho para 404, Amarelo para 500).
- **Servidor Express**:
  - `/estoque`: Retorna dados de um arquivo JSON simulando um banco de dados.
  - `/conf`: Exibe as configurações dinâmicas do projeto carregadas do `conf.json`.
  - `/adm`: Dashboard de integridade que verifica se os arquivos essenciais estão presentes.
  - `/log`: Exibe o histórico de análises do projeto.
- **Análise Automatizada**: Script que testa a saúde do sistema e salva os resultados automaticamente em `log.txt`.

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express** (Framework Web)
- **node-fetch** (Requisições HTTP)
- **chalk** (Estilização do terminal)

## 📂 Estrutura de Arquivos

- `cli.js`: Ponto de entrada da aplicação via terminal.
- `leitor.js`: Processamento e extração de links usando RegEx.
- `httpValidacao.js`: Lógica de requisição e tradução de status.
- `server.js`: Servidor Express e definição de rotas.
- `analise.js`: Script de verificação de integridade e geração de logs.
- `conf.json`: Configurações dinâmicas do servidor.
- `estoque.json`: Simulação de dados de produtos.

## 💻 Como Executar

### Pré-requisitos
- Node.js instalado.
- Instale as dependências:
  ```bash
  npm install
  ```

### CLI (Validação de Links)
```bash
# Validar um arquivo markdown
node cli.js ./lista-de-links.md

# Validar uma URL direta
node cli.js https://www.google.com
```

### Servidor Web
```bash
npm start
# Acesse: http://localhost:3000
```

### Script de Análise (Logs)
```bash
npm run analise
```

---
Por: Emilly Budri Bognar
