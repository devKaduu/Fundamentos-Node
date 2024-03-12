import http from "node:http";
import { Transform } from "node:stream";

// Todas portas de saida e entrada no node são streams

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed);

    //  Primeiro paramentro é o erro
    //  Segundo paramentro é a conversao o transformado
    callback(null, Buffer.from(String(transformed)));
  }
}

// request => ReadableStream
// response => WritableStream

const server = http.createServer((request, reponse) => {
  return request.pipe(new InverseNumberStream()).pipe(reponse);
});

server.listen(3334);
