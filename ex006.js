
let tamDireita = ''
let tamEsquerda = ''
let tronco = ''
const tamanhoArvore = 10
for (let cont = 1; cont < tamanhoArvore; cont++) {
 console.log(
  `${tamEsquerda = ' '.repeat(tamanhoArvore - cont).concat('*'.repeat(cont))}` +
  `${tamDireita += '*'.repeat(1)}`
 )
 /* console.log(tamDireita += `${'*'.repeat(1)}`) */
}
for (let cont = 1; cont < 3; cont++) {

 console.log(`${tronco = ' '.repeat(tamanhoArvore - 2).concat('*'.repeat(4))}`)
}
