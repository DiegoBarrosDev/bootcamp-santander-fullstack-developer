function trocaNumerosPares (array) {
    if (!array) return "Declare um array";
    if (array.length === 0) return -1;

    for(i = 0; i < array.length; i++) {
        if(array[i]%2 === 0) {
            array[i] = 0
        }    
    }
    return array
}

console.log(trocaNumerosPares(null))
