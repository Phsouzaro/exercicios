const input = require('readline-sync')


const nome1 = input.question('Primeiro Aluno: ')
const nome2 = input.question('Segundo Aluno: ')
const nome3 = input.question('Terceiro Aluno: ')
const nome4 = input.question('Quarto Aluno: ')
let vetorAlunos = [nome1, nome2, nome3, nome4]
const randomiza = Math.floor(Math.random() * vetorAlunos.length)


console.log(`O Aluno sorteado foi ${vetorAlunos[randomiza]}`)