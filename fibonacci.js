// Problema 1 - Sequência de Fibonacci:
// Implemente uma função que retorne os primeiros ‘n’ termos da sequência de Fibonacci. A função deve ser eficiente e capaz de lidar com grandes valores de ‘n’.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um numero inteiro e positivo: ', (n) => {
    let n1 = 0;
    let n2 = 1;
    let next = 0;
    let fibonacci = [];
    const value = Number(n);

    if(!Number.isNaN(value))
    {
      for (let i = 1; i <= value; i++) {
          fibonacci.push(n1);
          next = n1 + n2;
          n1 = n2;
          n2 = next;
      }

      console.log(fibonacci);
    } else {
      console.log('Por favor insira um numero inteiro e positivo');
    }
    rl.close();
});

