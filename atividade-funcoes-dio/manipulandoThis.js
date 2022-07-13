const pessoa1 = {
    nome: 'João',
    idade: 20
}
const pessoa2 = {
    nome: 'Maria',
    idade: 50
}

function calculaIdade(anos) {
	
    
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 3))
console.log(calculaIdade.apply(pessoa2, [3]))