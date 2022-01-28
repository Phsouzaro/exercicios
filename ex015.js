const diasAluguel = 8
const kmRodados = 720
const precoPorKm = 0.5
const precoPorDia = 20
const precoXdias = diasAluguel * precoPorDia
const precoXkm = kmRodados * precoPorKm

const total = precoXdias + precoXkm

console.log('O total a pagar é de R$' + total.toFixed(2))

