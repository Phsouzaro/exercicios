var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let idadeEmDias = parseInt(lines.shift())
let holdAno = 0;
let holdMes = 0;
let holdDia = 0;

while(idadeEmDias >= 365){
    idadeEmDias -= 365
    holdAno++
}
while(idadeEmDias >= 30){
    idadeEmDias -= 30
    holdMes++;
}
while(idadeEmDias >= 1){
    idadeEmDias -= 1
    holdDia++;
}

console.log(`${holdAno} ano(s)`)
console.log(`${holdMes} mes(es)`)
console.log(`${holdDia} dia(s)`)