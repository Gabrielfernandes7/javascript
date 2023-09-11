function pesquisaLinear(arr, item) {
    let tamanhoArr = arr.length;
    for (let i = 0; i < tamanhoArr; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

arr = [1, 2, 3, 4, 5];
item = 1;

if (pesquisaLinear(arr, item) === -1) {
    console.log("Valor não encontrado");
} else {
    console.log("Valor está presente no array");
}
