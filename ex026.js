
const input = require('readline-sync')

let valor = 200000000

function formatarBytes(valor){

    if(valor <= 0) return '0 Bytes'
    const b = 1024
    const size = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ]
    const i = Math.floor(Math.log(valor) / Math.log(b))

    return parseFloat(valor / b**i).toFixed(2)+ ' ' + size[i]
}


console.log(formatarBytes(valor))