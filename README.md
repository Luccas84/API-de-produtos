# 🛍️ API de Produtos — Projeto Local (Front + Back)

Este é um projeto completo de **cadastro de produtos**, desenvolvido para rodar **localmente**, com integração entre **frontend e backend**, sem necessidade de banco de dados externo.  
O objetivo é demonstrar de forma prática como o **JavaScript** no front pode se comunicar com uma **API Node.js** para criar, armazenar e listar produtos de forma simples.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Frontend
- **HTML5**
- **CSS3** (layout moderno e responsivo)
- **JavaScript (Fetch API)**

### 🔹 Backend
- **Node.js**
- **Express**
- **CORS**
- **Body-Parser**
- **FS (File System)** — utilizado para salvar os produtos localmente em `products.json`

---

## ⚙️ Estrutura do Projeto

api-produtos/
│
├── backend/
│ ├── server.js → Servidor Node/Express que gerencia as rotas
│ ├── products.json → Arquivo onde os produtos são salvos
│
├── index.html # Interface principal do sistema
├── style.css # Estilo e layout responsivo
├── script.js # Lógica do frontend e integração com a API
│
└── README.md → Documentação do projeto

---

## ⚙️ Como Rodar o Projeto Localmente

### 1. Instale o Node.js
Antes de começar, é necessário ter o **Node.js** instalado.  
Você pode baixar em: [https://nodejs.org](https://nodejs.org)

---

### 2. Configurar o Servidor Backend
Abra o terminal e acesse a pasta `backend` do projeto:

```bash
cd backend

Em seguida, inicialize o projeto Node e instale as dependências:

npm init -y
npm install express cors body-parser fs

3. Inicie o Servidor

Execute o comando abaixo para iniciar o backend:

node server.js


Se tudo estiver certo, você verá a mensagem:

Servidor rodando em http://localhost:3000

4. Abrir o Frontend

Volte à raiz do projeto e abra o arquivo index.html no navegador.
Você pode fazer isso clicando duas vezes sobre o arquivo ou arrastando-o para uma aba do navegador.

5. Usar o Sistema

Preencha os campos com Nome, Preço e Descrição do produto

Clique em Adicionar Produto

O produto será salvo no products.json e aparecerá logo abaixo da tela