function fibonacci(numeroElementos) {
    let a = 0;
    let b = 1;
    let fib = 0;
    for (let i = 0; i < numeroElementos; i++) {
        a = b;
        b = fib;
        fib = a + b;

        console.log(fib)
    }
}

fibonacci(10);
