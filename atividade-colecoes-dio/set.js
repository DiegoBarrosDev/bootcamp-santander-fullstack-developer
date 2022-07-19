const ARR = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos (array) {
    const MySet = new Set(array);
    console.log(MySet)
    return [...MySet]
}

console.log(valoresUnicos(ARR));