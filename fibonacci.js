// Problema 1 - Sequência de Fibonacci:
// Implemente uma função que retorne os primeiros ‘n’ termos da sequência de Fibonacci. A função deve ser eficiente e capaz de lidar com grandes valores de ‘n’.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um numero inteiro e positivo: ', (n) => {
    const value = Number(n);

    if(!Number.isNaN(value))
    {
      console.log(generateFibonacci(value));
    } else {
      console.log('Por favor insira um numero inteiro e positivo');
    }
    rl.close();
});

function generateFibonacci(value) {
  let n1 = 0;
  let n2 = 1;
  let next = 0;
  let fibonacci = [];

  // loop a partir do numero informado para gerar a sequencia.
  for (let i = 1; i <= value; i++) {
    fibonacci.push(n1);
    next = n1 + n2; // calcula o próximo numero da sequencia, adicionando os ultimos 2.

    // prepara as variaveis com valores atualizados para a proxima sequencia.
    n1 = n2;
    n2 = next;
  }

  return fibonacci;
}
