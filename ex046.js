class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de R$${valor.toFixed(2)}`)
            return this.verSaldo()
        } else {
            this.saldo -= valor
            console.log(`Valor de R$${valor.toFixed(2)} sacado com sucesso!`)
            this.verSaldo()
        }
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Deposito de R$${valor.toFixed(2)} realizado com sucesso! \nNovo saldo de R$${this.saldo}`)
        console.log(`----------------------------`)
        return this.saldo
    }
    verSaldo() {
        console.log(`Ag/c: ${this.agencia} / ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
        console.log(`----------------------------`)
    }
}

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo)
        this.limite = limite
    }
    sacar(valor) {
        if (valor > (this.saldo + this.limite)) {
            console.log(`Saldo insuficiente para o saque de R$${valor.toFixed(2)}`)
            console.log(`Limite disponivel além do saldo para saque: R$${this.limite.toFixed(2)}`)
            return this.verSaldo()
        } else {
            if (valor > this.saldo) {
                console.log(`valor: ${valor} | saldo: ${this.saldo} | valor-saldo: ${valor - this.saldo}`)
                this.limite -= (valor - this.saldo)
            }
            this.saldo -= valor
            console.log(`Valor de R$${valor.toFixed(2)} sacado com sucesso!`)
            this.verSaldo()
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(agencia, conta, saldo) {
        super(agencia, conta, saldo)
    }
}

console.log(`classe ContaCorrente abaixo:---------`)
const cc = new ContaCorrente(237, 2905, 200, 100)
cc.sacar(50)
cc.depositar(100)
cc.sacar(300)
console.log(cc)
console.log(`classe ContaPoupanca abaixo:---------`)
const cp = new ContaPoupanca(237, 2905, 200, 100)
cp.sacar(50)
cp.depositar(100)
cp.sacar(300)
console.log(cp)
