function selectSort(arr) {
    let tamanhoArr = arr.length;
    
    for (let i = 1; i < tamanhoArr - 1; i++) {
        let minimo = i;
        for (let j = i + 1; j < tamanhoArr; j++) {
            if (arr[j] < arr[minimo]) {
                minimo = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minimo];
        arr[minimo] = temp;
        
    }

    return arr;
}

const arrayElementos = [-2, 0, 1, 3, 2, 4, 5];
const arrOrdenado = selectSort(arrayElementos);

console.log(`Menor elemeto é: ${arrOrdenado}`);
