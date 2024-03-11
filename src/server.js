//CommonJs => require
//const http = require('http');

//ESMoudes => import/export
//Padrao node nao suporta ESMoudes alterar no package.json

import http from 'node:http';

// Request => todas as requisicoes chegando no servidor
// Criar um usuario (nome, email, senha)

// - HTTP
//  - Metodos HTTP
//  - URL 


//Response => devolver uma resposta para quem esta chamando o nosso servidor

const server = http.createServer((request, response) => {
  return response.end('Hello World')
})

server.listen(3333)



// Aplicacoes HTTP => APIs