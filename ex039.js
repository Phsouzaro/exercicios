//Procurar o menor numero primo = 2
//dividir o resultado pelo numero primo que o divide
//até encontrar o resultado
/**
 * 220|2    
   0 110|2  
         0 55|5 
             0 11|11
                 0 1
 */

function fatorPrimo(numero) {
    const fatores = []
    let divisor = 2
    while (numero > 1) {
        while (numero % divisor == 0) {
            fatores.push(divisor)
            numero /= divisor
        }
        divisor += 1
    }
    return fatores
}

let arrayFatorado = fatorPrimo(600851475143)
let maiorFatorPrimo = arrayFatorado.reduce((a, b) => Math.max(a, b))

console.log(maiorFatorPrimo)
