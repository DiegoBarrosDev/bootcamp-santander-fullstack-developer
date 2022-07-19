const array = [2, 4, 6, 8];
console.log(array.map((item) => item * 3));






const garcom = {
    gorjeta: 0.1
}

const clientes = [100, 150, 130, 220]

console.log(clientes.map(function (cliente) { 
    return cliente * this.gorjeta 
}, garcom));