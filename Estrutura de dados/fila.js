// FIFO - Primeiro que entra, último que sai
class Queue {
    constructor() {
        this.count = 0;
        this.items = [];
    }

    // Adiciona um item no fim da fila
    insertElementInQueue(element) {
        this.items.push(element);
        this.count++;
    }

    // Remove o último item da fila
    removeElementInQueue() {
        this.items.shift();
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }
 
}

const queue = new Queue();

queue.insertElementInQueue(10);
queue.insertElementInQueue(12);
queue.insertElementInQueue(15);

const queueEmpty = queue.isEmpty();

if (queueEmpty === true) {
    console.log("A fila está vazia");
} else {
    console.log("A fila está preenchida");
}

function showQueue() {
    console.log("*** Fila ***")
    for (let i = 0; i < queue.items.length; i++){
        console.log(`Fila[${i}]: ${queue.items[i]}`);
    }
}

showQueue();
