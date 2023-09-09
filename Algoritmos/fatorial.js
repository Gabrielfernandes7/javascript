function fatorial(numberElements) {
    if (numberElements === 1 || numberElements === 0) {
        console.log(1);
    } else {
        let fat = 1;
        let i = 1;
        while (numberElements > i) {
            fat *= i;
            i++
            console.log(`${i}! = ${fat} * ${i} = ${fat*i}`);
        }
    }
}

fatorial(10);