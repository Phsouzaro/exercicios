function maths(numero) {

 console.log(`Dobro: ${numero * 2}`)
 console.log(`Triplo: ${numero * 3}`)
 console.log(`Raiz Quadrada: ${(numero ** 0.5).toFixed(2)}`)
 console.log(`Elevado a dois: ${Math.pow(numero, 2)}`)
 console.log(`Divisivel por 3: ${numero % 2 === 0 ? 'Sim' : 'Nao'}`)
 console.log(`Divisivel por 3: ${numero % 3 === 1 ? 'Sim' : 'Nao'}`)
}

maths(18)
