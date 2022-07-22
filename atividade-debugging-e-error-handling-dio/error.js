function verificaArray(array, tamanho) {
    try {
        if (!array || !tamanho) {
            throw new ReferenceError('Você não informou todos os parâmetros')
        }

        if (typeof array !== 'object') {
            throw new TypeError('O array enviado não é um objeto')
        }

        if (typeof tamanho !== 'number') {
            throw new TypeError('O tamanho enviado não é um número')
        }

        if (tamanho !== array.length) {
            throw new RangeError('O tamanho informado não corresponde ao tamanho do array')
        }

        return array;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError')
            console.log(e.message)
        } else {
            console.log('Erro não esperado')
        }
    }
}
    
    


const array = [1, 2, 3, 4, 5];

console.log(verificaArray(array, 5));
