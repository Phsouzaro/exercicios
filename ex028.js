const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    for(let valor of arr){
        if(valor > 0) positive++
        if(valor < 0) negative++
        if(valor === 0) zero++
    }
    let tamanhoArray = arr.length

    return `${(positive /tamanhoArray).toFixed(6)} \n${(negative / tamanhoArray).toFixed(6)} \n${(zero / tamanhoArray).toFixed(6)}`
}

console.log(plusMinus(arr))