// CommonJs => require
// const http = require('http');

// ESMoudes => import/export
// Padrao node nao suporta ESMoudes alterar no package.json

import http from "node:http";

// - HTTP
//  - Metodos HTTP
//  - URL

// GET / POST / PUT / PATCH / DELETE - Metodos HTTP utilizados no dia dia

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT =>  Atualizar um recurso no back-end
// PATCH => Atualizar uma informacao especifica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// Posso ter duas rotas com URL's iguais porem com metodos diferentes
// /user => GET => Buscando usuarios do back-end
// /users => POST => Criar um usuario no back-end

// Request => todas as requisicoes chegando no servidor
// Criar um usuario (nome, email, senha)

// Response => devolver uma resposta para quem esta chamando o nosso servidor

// Stateful - Stateless
// Stateful - mantem informacao em memoria
// Stateless - nao mantem informacao em memoria

// JSON - Javascript Object Notation
// Muito utilizado para transicao de dados entre front-end e back-end e tambem back-end e outro back-end

// Cabeçalhos Requisicao/Resposta) - Informacoes adicionais como aquele dado pode ser interpretado pelo front end - metadados

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    // Early return
    return response
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({ id: 1, name: "John Doe", email: "johndoe@example.com" });
    return response.writeHead(201).end();
  }

  return response.writeHead(404).end();
});

server.listen(3333);

// Aplicacoes HTTP => APIs
