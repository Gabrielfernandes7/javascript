function progressaoAritmetica(numeroElementos) {
    let a = 0;
    let b = 1;
    let sumValues = 0;

    let i = 0;
    while (i < numeroElementos) {
        b = a + 1;
        a = b;
        sumValues = sumValues + b;
        i++;
    }
    
    console.log(sumValues, a, b);
}

progressaoAritmetica(99); // 55