//iterar entre os primeiros 100 numeros naturais e pegar seu quadrado
//formula é 1²+2²+3²...= ...
//retonar o quadrado da soma dos 100 numeros
//formula (1+2+3...+100)² = ...² = ...
//retornar a diferença entre o quadrado e o quadrado da soma

const quadradoDosNumeros = []
for(let i = 1; i <= 100; i++) quadradoDosNumeros.push(i**2)
const somaDoQuadrado = quadradoDosNumeros.reduce((a, b)=>a+b)

const cemNumerosNaturais = []
for(let i = 1; i <=100; i++) cemNumerosNaturais.push(i)
const quadradoDaSoma = (cemNumerosNaturais.reduce((a,b)=>a+b)**2)

const diferenca = quadradoDaSoma - somaDoQuadrado

console.log(somaDoQuadrado)
console.log(quadradoDaSoma)
console.log(diferenca)

