const calculadora = require('./calculadora')  // Aqui ele ira 'importar' o aqruivo calculadora.js para poder utilizar.

console.log("Bem vindo a " + calculadora.nome);
console.log("A Soma é: " + calculadora.soma(1,2));
console.log("A Subitração é: " + calculadora.sub(1,2));
console.log("A Divisão é: " + calculadora.div(1,2));
console.log("A Multiplicação é: " + calculadora.mult(1,2));
