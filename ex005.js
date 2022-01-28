
const multiplos = []

for (let i = 0; i <= 100; i++) {

 if (i % 4 === 0) multiplos.push(i)
}

for (let numero of multiplos) console.log(`Numero: ${numero}`)

