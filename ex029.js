const arr = [7, 69, 2, 221, 8974]

function miniMaxSum(arr) {
    let holdSoma1 = arr.slice(0, -1)
    let holdSoma2 = arr.slice(0)
    holdSoma2.shift()

    const soma1 = holdSoma1.reduce((valor, indice)=>valor + indice)
    const soma2 = holdSoma2.reduce((valor, indice)=>valor + indice)

    console.log(soma1)
    console.log(soma2)
    
}

miniMaxSum(arr)