function solucao(n) {
    let possiveisPiramidesPerfeitas = 0;
    let pecasFaltantesParaProximaPiramidePerfeita = 0;
    /**Algoritimo da solucao Abaixo */
    let holdValue = 2, holdPiramide = 3, pararIf = true
    for (let i = 0; i < n; i++) {
        if (holdPiramide <= n) possiveisPiramidesPerfeitas++
        if (holdPiramide > n && pararIf) {
            pecasFaltantesParaProximaPiramidePerfeita = holdPiramide - n
            pararIf = false
        }
        holdValue++
        holdPiramide += holdValue
    }
    /**Algoritimo da solucao Acima */
    return [possiveisPiramidesPerfeitas, pecasFaltantesParaProximaPiramidePerfeita];
}

console.log(solucao(7))


/**
 * Piramide perfeita tem 3 tamanhos
 * 8
 * 88 - 3
 * 888 - 6
 * 8888 - 10
 * 88888 - 15
 * 888888 - 21
 * 8888888  - 28
 * 88888888  - 36
 * 
 * Receber um numero do usuario
 * retornar quantas piramides possiveis formar com o valor
 * retornar o valor que falta para formar a proxima piramide
 * 
 * 
 * 
 */

