class ValidarCpf {
    constructor(cpf) {
        this.cpf = cpf
        this.limpaCpf(this.cpf)
    }
    limpaCpf(cpf) {
        if (typeof cpf !== 'string') {
            console.log(`Tipo de dado inserido inválido!`)
            return false
        }
        const cpfLimpo = this.cpf.replace(/\D+/g, '')
        return this.comparaCpf(cpfLimpo)
    }
    geraDigitoCpf(novoCpf) {
        let multiplicador = novoCpf.length + 1
        let digito = 0, total = 0, holdCpf = []
        for (let valor of novoCpf) {
            holdCpf.push(valor * multiplicador)
            multiplicador--
        }
        total = holdCpf.reduce((a, b) => a + b)
        digito = 11 - (total % 11)
        if (digito > 9) digito = 0
        novoCpf.push(String(digito))
        return novoCpf
    }
    comparaCpf(cpfLimpo) {
        let novoCpf = [...cpfLimpo].slice(0, -2)
        for (let i = 1; i <= 2; i++) novoCpf = this.geraDigitoCpf(novoCpf)
        novoCpf = novoCpf.join('')
        if (novoCpf == cpfLimpo) return console.log(`CPF: ${this.cpf} validado com sucesso!`)
        else return console.log(`CPF INVALIDO!!!`)
    }

}



const ValidaCpf = new ValidarCpf('070.987.720-03');