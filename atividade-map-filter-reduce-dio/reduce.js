const array = [1,3,5,7,9]
console.log(array.reduce((accumulator, item) => accumulator + item));



const gastos = [10, 25.50, 33, 44.45]
const saldo = 200;

console.log(gastos.reduce((acumulador, preco) => acumulador - preco, saldo));