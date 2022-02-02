const array = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0
    var max = candles.reduce((a, b)=> Math.max(a,b))
    for(let valor of candles){
        if(valor === max) count++
    }
    return count
}


birthdayCakeCandles(array)
