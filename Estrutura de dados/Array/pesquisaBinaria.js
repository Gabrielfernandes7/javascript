function pesquisaBinaria(arr, item) {
    
    let minimo = 1;
    let maximo = arr.length;
    
    while(minimo <= maximo) {
        const meio = Math.floor(
            (maximo + minimo) / 2
        );

        if(arr[meio] === item) {
            // return meio;
            return meio;
        } else if (arr[meio] < item) {
            minimo = meio + 1;
        } else {
            // senão se (arr[meio] > item)
            maximo = meio - 1;
        }
    }

    return -1;
}

let listaOrdenada = [1, 2, 88, 4, 5, 6].sort();

const resposta = pesquisaBinaria(listaOrdenada, 6);

console.log(resposta);