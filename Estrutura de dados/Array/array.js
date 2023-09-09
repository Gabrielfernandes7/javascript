// Declarar um array
let arr = [];

// Inicialização de um array
let meuArray = [1, 2, 3];
meuArray.push(4); // Adiciona um elemento no final

// Acessando elementos
let primeiroElemento = meuArray[0];

// Tamanho do array
const tamanhoArr = meuArray.length;

// Iteração com array
for (let i = 0; i < meuArray.length; i++) {
    console.log(`${meuArray[i]}`);
}

meuArray.forEach(function (elemento) {
    console.log(`Meu array com forEach ${elemento}`);
});

// Modificações de arrays
meuArray.push(5); // Adiciona um elemento no final
meuArray.pop(); // Remove o último elemento
meuArray.shift(); // Remove o primeiro elemento
meuArray.unshift(0); // Adiciona um elemento no início
meuArray[1] = 10; // Modifica um elemento diretamente

// Arrays multidimensionais ou matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let elemento = matriz[0][1]; // 2
console.log(elemento);

console.log(meuArray);
