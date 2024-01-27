// Problema 2 - Anagramas:
// Crie uma função que determine se duas strings são anagramas, ou seja, se uma pode ser formada pela rearranjo das letras da outra.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira a primeira string: ', (str1) => {
    rl.question('Insira a segunda string: ', (str2) => {     
        let result = false; // retorno false por default.
        // remove espaços e torna a string em lowerCase.   
        str1 = str1.replace(/ /g, '').toLowerCase();
        str2 = str2.replace(/ /g, '').toLowerCase();

        // valida se as strings possuem valor e se sao de mesmo tamanho, caso não sejam, retorna false.
        if((str1.length === str2.length) && (str1.length > 0 && str2.length > 0)) result = checkForAnagram(str1, str2);
        
        console.log(result);
        rl.close();
    });
});

function checkForAnagram(string1, string2) {
    // splita as strings e as ordenam, após isso verifica se as strings ordenadas sao iguais, um anagrama.
    const sort1 = string1.split('').sort().join('');
    const sort2 = string2.split('').sort().join('');

    return sort1 === sort2
}
