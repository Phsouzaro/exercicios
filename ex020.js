var readlineSync = require('readline-sync')

const grausCelcius = readlineSync.question('Digite quantos graus em °C: ')
const fahrenheit = (grausCelcius * 9/5) + 32
console.log(`A temperatura de ${grausCelcius}°C corresponde a ${fahrenheit}°F`)