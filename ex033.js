const valor = 1000;
/* const multiplesValues = [] */

function multiples(valor){
    let sum = 0
    for(let numero = 0; numero < valor; numero++){
        if(numero % 3 === 0 || numero % 5 === 0){
            sum +=numero
        }
    }
    /* 
    const sum = multiplesValues.reduce((a, b) => a + b)

    console.log(multiplesValues) */
    return sum
}

console.log(multiples(valor))