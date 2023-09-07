// LIFO
class Stack {
    constructor() {
        this.count = 0;
        this.items = [];
    }

    // Adiciona o elemento no topo da pilha
    insertElementInStack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // Remove o elemento no topo da pilha
    removeElementInStack() {
        return this.items.pop();
    }

    // Mostra o elemento do topo da pilha
    peek() {
        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.insertElementInStack(1);
stack.insertElementInStack(1);
stack.insertElementInStack(2);
stack.insertElementInStack(3);
stack.insertElementInStack(5);
stack.insertElementInStack(8);

console.log("*** Dados da pilha ***")
const stackEmpty = stack.isEmpty();
if (stackEmpty === true) {
    console.log(`A pilha está vazia`);
} else {
    console.log(`A pilha está preenchida`);
}

console.log(`Os elementos da pilha são ${stack.items}`);
console.log(`O topo da pilha é ${stack.peek()} \n`);

function showItemsInStack() {
    const legthStack = stack.items.length;
    console.log(`*** Pilha ***`);
    for (let i = legthStack - 1; i >= 0; i--) {
        console.log(`Pilha[${i}] = ${stack.items[i]}`);
    }
}

showItemsInStack();
