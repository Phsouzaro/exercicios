const { Console } = require('console')
var input = require('readline-sync')

var valor = Number(input.question('Valor: '))
const notas = {
    nota100: 0,
    nota50: 0,
    nota20: 0,
    nota10: 0,
    nota5: 0,
    nota2: 0,
}
const moedas = {
    moeda1: 0,
    moeda50: 0,
    moeda25: 0,
    moeda10: 0,
    moeda5: 0,
    moeda01: 0
}

function convertNotas(){

    while(valor >= 100){
        valor-=100
        notas.nota100++
    }
    while(valor >= 50){
        valor-=50
        notas.nota50++
    }
    while(valor >= 20){
        valor-=20
        notas.nota20++
    }
    while(valor >= 10){
        valor-=10
        notas.nota10++
    }
    while(valor >= 5){
        valor-=5
        notas.nota5++
    }
    while(valor >= 2){
        valor-=2
        notas.nota2++
    }
}
function falaNotas(){
    console.log(`${notas.nota100} nota(s) de R$ 100.00`)
    console.log(`${notas.nota50} nota(s) de R$ 50.00`)
    console.log(`${notas.nota20} nota(s) de R$ 20.00`)
    console.log(`${notas.nota10} nota(s) de R$ 10.00`)
    console.log(`${notas.nota5} nota(s) de R$ 5.00`)
    console.log(`${notas.nota2} nota(s) de R$ 2.00`)
}
function convertMoedas(){

    while(valor >= 1){
        valor-=1
        moedas.moeda1++
    }
    while(valor >= 0.50){
        valor-=0.50
        moedas.moeda50++
    }
    while(valor >= 0.25){
        valor-=0.25
        moedas.moeda25++
    }
    while(valor >= 0.10){
        valor-=0.10
        moedas.moeda10++
    }
    while(valor >= 0.05){
        valor-=0.05
        moedas.moeda5++
    }
    console.log(valor)
    while(valor.toFixed(2) >= 0.01){
        valor-=0.01
        moedas.moeda01++
    }

}
function falaMoedas(){
    console.log(`${moedas.moeda1} moeda(s) de R$ 1.00`)
    console.log(`${moedas.moeda50} moeda(s) de R$ 0.50`)
    console.log(`${moedas.moeda25} moeda(s) de R$ 0.25`)
    console.log(`${moedas.moeda10} moeda(s) de R$ 0.10`)
    console.log(`${moedas.moeda5} moeda(s) de R$ 0.05`)
    console.log(`${moedas.moeda01} moeda(s) de R$ 0.01`)

}
function falar(){
    console.log('NOTAS:')
    convertNotas(valor)
    falaNotas()
    console.log('MOEDAS:')
    convertMoedas(valor)
    falaMoedas()
}

falar()

