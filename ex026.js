
const input = require('readline-sync')

let valor = 2000000000000000000000000

function formatarBytes(valor, decimal = 2){

    if(valor <= 0) return '0 Bytes'
    const b = 1024
    const size = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ]
    const dm = decimal > 0 ? 0: decimal
    const i = Math.floor(Math.log(valor) / Math.log(b))

    return parseFloat(valor / Math.pow(b, i)).toFixed(2)+ ' ' + size[i]
}


console.log(formatarBytes(valor))