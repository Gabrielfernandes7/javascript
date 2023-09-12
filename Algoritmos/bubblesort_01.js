function bubbleSort(arr) {
    let tamanhoArr = arr.length;
    let swapped; // mudou

    do {
        swapped = false;
        // Vai até o último elemento do array
        for (let i = 0; i < tamanhoArr - 1; i++) {
    
            // compara dois elementos, o maior fica na esquerda
            if (arr[i] > arr[i + 1]) {
                let temporario = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temporario;
                swapped = true;
            }
        }

    } while (swapped);
    return arr; 
}

/*
temporario = variável somente para guarda uma variável
*/

const meuArray = [1, 3, 4, 2, 5, 7, 6, 0];
const arrayOrdenado = bubbleSort(meuArray);
console.log(`${arrayOrdenado}`);