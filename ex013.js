const preco = 123.95

const descontoPorcento = preco * 5 / 100
const valorComDesconto = preco - descontoPorcento

console.log(`O produto que custava R$${preco}, na promocao com desconto de 5% passou a custar R$${valorComDesconto.toFixed(2)}`)
