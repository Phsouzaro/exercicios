const primo = (number) => {
    let primos = [2];
    let maiorDivisor;
    let isPrime;
    for (let i = 3; primos.length < number; i += 2) {
        maiorDivisor = Math.sqrt(i) + 1;
        isPrime = true;
        for (let j = 0; primos[j] < maiorDivisor; j++) {
            if (i % primos[j] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primos.push(i);
    }
    return primos[primos.length - 1];
}
console.log(primo(10001));