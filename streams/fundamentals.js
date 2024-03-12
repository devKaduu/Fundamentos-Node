// Streams =>

//  process.stdin - Tudo que estou recebendo como entrada
//  pipe - encaminhando | encaminhar
//  process.stdout - para uma saida

// Consigo trabalhar com os dados antes deles estarem completos

process.stdin.pipe(process.stdout);

import { Readable } from "node:stream";

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

new OneToHundredStream().pipe(process.stdout);
