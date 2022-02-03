
function ehPrimo(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % 2 === 0 || n % 3 === 0) {
            return false
        }
        return true
    }
}

function somaDosPrimos(n) {
    var arrayPrimos = [2, 3];
    var i = 5;
    for (var i = 5; i < n; i += 2) {
        if (ehPrimo(i)) {
            arrayPrimos.push(i)
        }
    }
    return arrayPrimos.reduce((a, b) => a + b);
}

console.log(somaDosPrimos(2000000))