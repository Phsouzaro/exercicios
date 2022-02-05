/**
 * Criar uma banco, que recebe conta corrente e poupanca usando polimorfismo.
 * 
 * adicionar caracteristicas de saque para cada conta
 * poupanca tem nao tem limite
 * corrente tem limite
 */
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo
}
Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente para o saque de R$${valor.toFixed(2)}`)
        return this.verSaldo()
    } else {
        this.saldo -= valor
        console.log(`Valor de R$${valor.toFixed(2)} sacado com sucesso!`)
        this.verSaldo()
    }
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    console.log(`Deposito de R$${valor.toFixed(2)} realizado com sucesso! \nNovo saldo de R$${this.saldo}`)
    console.log(`----------------------------`)
    return this.saldo
}
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia} / ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
    console.log(`----------------------------`)
}

function ContaCorrente(agencia, conta, valor, limite) {
    Conta.call(this, agencia, conta, valor);
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function (valor) {
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

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca


const cc1 = new ContaCorrente(237, 2905, 200, 100);
cc1.sacar(230)
const cp1 = new ContaPoupanca(237, 2906, 200);
cp1.sacar(230)
