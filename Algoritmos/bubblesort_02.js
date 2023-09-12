function bubbleSort(arr) {
    let tamanhoArr = arr.length;

    for (let j = tamanhoArr - 1; j > 0; j--) {
        for (let i = 0; i < tamanhoArr - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temporario = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temporario;
            }
        }
    }

    return arr;
}

const meuArray = [1, 3, 4, 2, 5, 7, 6, 0, 8, 9, 11, 10, 12];
const arrayOrdenado = bubbleSort(meuArray);
console.log(`${arrayOrdenado}`);