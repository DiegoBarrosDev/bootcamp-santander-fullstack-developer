class ContaBancaria {
    
    constructor (agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    depositar(valorDepositado){
        this._saldo = this._saldo + valorDepositado;
        return this._saldo;
    }

    sacar(valorSacado) {
        
        if (valorSacado > this._saldo){
            return 'Saldo insuficiente';
        }

        this._saldo = this.saldo - valorSacado;
        
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito (){
        return this._cartaoCredito;
    }

    set cartaoCredito (novoCartao) {
        this._cartaoCredito = novoCartao;
        return this._cartaoCredito;
    }

}

class ContaPoupanca extends ContaBancaria{
    
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Universitária';
    }

    sacar(valorSacado) {
        if (valorSacado > this._saldo){
            return 'Saldo insuficiente';
        }
        
        if (valorSacado > 500) {
            return 'Operação inválida!'
        }

        this._saldo = this._saldo - valorSacado;
        return this._saldo
    }
}