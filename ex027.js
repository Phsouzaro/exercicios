const arr = [[11,2,4],[4,5,6],[10,8,-12]]

function diagonalDifference(arr) {
    const holdConta1 = []
    const holdConta2 = []
    for(let index in arr){
        holdConta1.push(arr[index][index])
        
    }
    let indexTemp = arr.length -1
    for(let index in arr){
        holdConta2.push(arr[index][indexTemp])
        indexTemp--
    }
    const conta1 = holdConta1.reduce((valor, indice) => valor + indice)
    const conta2 = holdConta2.reduce((valor, indice) => valor + indice)
    const x = conta1 - conta2
    let result = x
    if(x < 0){
        result = x * -1
    }
    

    return result
}

console.log(diagonalDifference(arr))