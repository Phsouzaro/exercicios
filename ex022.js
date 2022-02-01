const input = require('readline-sync')

const catetoMenor = input.question('Comprimento do cateto oposto: ')
const catetoMaior = input.question('Comprimento do cateto Adjescente: ')
const hipotenusa = Math.hypot(catetoMenor, catetoMaior)
console.log(`A hipotenusa vai medir ${hipotenusa.toFixed(2)}`)