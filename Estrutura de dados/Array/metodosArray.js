// Método map()
// Cria um novo array com os resultados da chamada de uma funcção para cada elemento do array
let numeros = [1, 2, 3, 4, 5];
let duplicados = numeros.map(function (numero) {
    return numero * 2;
});
console.log(`Valores duplicados: ${duplicados}`);

// Método filter()
// Cria um novo array com todos os elementos que passam em um teste (função)
let numerosA = [1, 1, 2, 3, 5, 8, 13];
let pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});
console.log(`Valores pares: ${pares}`);

// Método Reduce
// Utilizado para reduzir um array a um único valor
let numerosB = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let soma = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero; 
});
console.log(`A soma é: ${soma}`);
