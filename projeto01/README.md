# Projeto 01 — Sistema Web Backend sem Framework

**Aluno:** Emilly Budri Bognar  
**Disciplina:** FATEC-217 — Desenvolvimento Web III  
**Período:** 2026/1

---

## 📋 Descrição

Este projeto consiste em um servidor Node.js que gerencia as rotas de um site institucional para uma joalheria de luxo (**Aura Joias**), servindo arquivos HTML estáticos e recursos (CSS, JS, Imagens) de forma dinâmica — sem o uso de frameworks.

### Funcionalidades

- ✅ **Servidor HTTP** criado com o módulo nativo `http` do Node.js
- ✅ **Roteamento Dinâmico** — mapeamento de rotas para arquivos HTML por hierarquia de pastas
- ✅ **Serviço de Arquivos Estáticos** — entrega de CSS, JS e imagens com `fs` e `path`
- ✅ **Página 404 Personalizada** — resposta para rotas não encontradas

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior instalado

### Passos

1. Navegue até a pasta `projeto01`:
   ```bash
   cd projeto01
   ```

2. Execute o servidor:
   ```bash
   node rotaServer.js
   ```

3. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 📁 Estrutura de Arquivos

```
projeto01/
├── rotaServer.js          # Servidor HTTP e lógica de roteamento
├── index.html             # Página principal
├── 404.html               # Página de erro
├── assets/                # Recursos globais (CSS, imagens)
├── quemsou/               # Rota /quemsou
│   └── quemsou.html
├── produtos/              # Rota /produtos e sub-rotas
│   ├── produtos.html
│   ├── prod1/prod1.html
│   ├── prod2/prod2.html
│   └── prod3/prod3.html
├── perguntas/             # Rota /perguntas
│   └── perguntas.html
└── README.md              # Este arquivo
```

---

## 🗺️ Estrutura de Rotas

| Rota | Arquivo Servido |
|------|----------------|
| `/` | `index.html` |
| `/quemsou` | `quemsou/quemsou.html` |
| `/produtos` | `produtos/produtos.html` |
| `/produtos/prod1` | `produtos/prod1/prod1.html` |
| `/produtos/prod2` | `produtos/prod2/prod2.html` |
| `/produtos/prod3` | `produtos/prod3/prod3.html` |
| `/perguntas` | `perguntas/perguntas.html` |

---

## 🧩 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| Node.js (`http`) | Criação do servidor HTTP |
| Node.js (`fs`, `path`) | Leitura e serviço de arquivos |
| HTML5 / CSS3 | Estrutura e estilo das páginas |
| Lucide Icons | Ícones vetoriais |
| Google Fonts | Tipografia |
