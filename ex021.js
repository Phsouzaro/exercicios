const input = require('readline-sync')

const valor = input.question('Digite um valor: ')

console.log(`O valor digitado foi ${valor}  e a sua porção inteira é ${Math.floor(valor)}`)