// Streams =>

//  process.stdin - Tudo que estou recebendo como entrada
//  pipe - encaminhando | encaminhar
//  process.stdout - para uma saida

// Consigo trabalhar com os dados antes deles estarem completos

// Buffer - é uma forma de transacionar dados entre streams

process.stdin.pipe(process.stdout);

import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    //  Primeiro paramentro é o erro
    //  Segundo paramentro é a conversao o transformado
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  //  Chunk é o pedaço do dado que a gente leu da stream de leitura
  //  Encoding Como essa informacao tá codificada
  //  Callback uma funcao que precisa chamar depois que terminou o processamento

  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

// new OneToHundredStream().pipe(process.stdout); // Normal
// new OneToHundredStream().pipe(new MultiplyByTenStream()); // Multiplicando por 10
new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
