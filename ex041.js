const input = require('readline-sync')

const entrada = input.question('Digite 3 valores separados por espaço: ')
const numeroSeparado = entrada.split(' ', 3)

function bhaskara(arr) {

    let a = Number(arr[0]), b = Number(arr[1]), c = -Number(arr[2]), t = 0

    if (((b ** 2) - 4 * a * c) < 0 || a === 0) {
        console.log('Impossivel Calcular')
    }
    else {
        t = ((b * b) - 4 * a * c) ** 0.5
        let x1 = (-b + t) / (2 * a)
        let x2 = (-b - t) / (2 * a)
        console.log(x1.toFixed(5))
        console.log(x2.toFixed(5))
    }
    return 0
}

console.log(bhaskara(numeroSeparado))



//Calcule as raízes da equação x2 + 12x – 13 = 0.

/**
 * 
 * Utilizando a fórmula de Bhaskara, separe os coeficientes da equação e realize o primeiro passo.

a = 1, b = 12 e c = – 13

Δ = b2 – 4ac

Δ = 122 – 4·1·(– 13)

Δ = 144 + 52

Δ = 196
 * 
 * 
 * 
 * Tendo em mãos o valor de Δ, realize o segundo passo:

x = – b ± √Δ
      2·a

x = – 12 ± √196
      2·1

x = – 12 ± 14
      2

Por fim, realize o terceiro passo para encontrar as raízes da equação do segundo grau.

x' = – 12 + 14
       2

x' = 2
      2

x' = 1

x'' = – 12 – 14
       2

x'' = – 26
       2

x'' = – 13

Portanto, as raízes da equação x2 + 12x – 13 = 0 são 1 e – 13.
 * 
 */