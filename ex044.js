/**Validador de cpf utilizando a mesma metrica do governo */

const cpf = '030.515.761-23'

console.log(start(cpf, cpf))

function start(cpf, cpfOriginal) {
    return formataCpf(cpf, cpfOriginal)
}
function formataCpf(cpf, cpfOriginal) {
    const cpfLimpo = cpf.replace(/\D+/g, '')
    const arrCpf = Array.from(cpfLimpo)
    const cpfEntrado = Array.from(cpfLimpo)
    arrCpf.splice(9, 2)
    return completaCpf(arrCpf, cpfEntrado, cpfOriginal)
}
function completaCpf(arrCpf, cpfEntrado, cpfOriginal) {
    let soma1 = 10, soma2 = 11
    let holdPrimeiraMult = [], holdSegundaMult = []
    const cpfCopia = arrCpf.slice(0)
    /**************************************** */
    cpfCopia.forEach(valor => {
        holdPrimeiraMult.push(valor * soma1)
        soma1--
    })
    soma1 = holdPrimeiraMult.reduce((a, b) => a + b)
    soma1 = 11 - (soma1 % 11)
    if (soma1 > 9) cpfCopia.push('0')
    cpfCopia.push(String(soma1))
    /**************************************** */
    cpfCopia.forEach(valor => {
        holdSegundaMult.push(valor * soma2)
        soma2--
    })
    soma2 = holdSegundaMult.reduce((a, b) => a + b)
    soma2 = 11 - (soma2 % 11)
    if (soma2 > 9) cpfCopia.push('0')
    cpfCopia.push(String(soma2))
    /**************************************** */
    return comparaCpf(cpfCopia, cpfEntrado, cpfOriginal)
}
function comparaCpf(cpfGerado, cpfEntrado, cpfOriginal) {
    cpfGerado = cpfGerado.join('')
    cpfEntrado = cpfEntrado.join('')
    if (cpfGerado != cpfEntrado) {
        return '[ERRO] - CPF INVALIDO'
    } else {
        return `CPF: ${cpfOriginal} - validado com sucesso!`
    }
}