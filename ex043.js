let tensao = 12
let resistores = [1500, 100, 100, 1500]


function solucao(tensao, resistores) {
    let resposta = [];
    let resistorEquivalente = resistores.reduce((a, b) => a + b)
    let correnteI = tensao / resistorEquivalente

    for (valor of resistores) {
        resposta.push(valor * correnteI)
    }
    return resposta;
}


console.log(solucao(tensao, resistores))

