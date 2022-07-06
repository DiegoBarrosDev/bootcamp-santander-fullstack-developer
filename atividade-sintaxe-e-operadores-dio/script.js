function comparar(num1, num2) {
    let string1;
    let string2;

    if (num1 === undefined || num2 === undefined) { return console.log("Defina os números a serem comparados!") }

    (num1 == num2) ? string1 = `Os numeros ${num1} e ${num2} são iguais. ` : string1 = `Os numeros ${num1} e ${num2} não são iguais. `;
    
    soma = num1 + num2;

    if (soma > 10 && soma != 20) {
        if (soma > 20) {
            string2 = `Sua soma é ${soma}, que é maior que 10 e maior que 20.`
        } else { string2 = `Sua soma é ${soma}, que é maior que 10 e menor que 20.` }
    } else if (soma != 10 && soma != 20) {
        string2 = `Sua soma é ${soma}, que é menor que 10 e menor que 20.`
    } else {
        string2 = `Sua soma é ${soma}.`
    }
    console.log(string1, string2)
}

comparar(5, 17)