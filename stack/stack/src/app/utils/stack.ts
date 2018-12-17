export class Stack {
    private top = 0;
    private items = [];

    constructor() { }

    push(element) {
        this.items[top++] = element;
    }

    pop() {
        return this.items[--this.top];
    }

    peek() {
        return this.items[this.top - 1];
    }

    clear() { }

    print() {
        console.log(this.peek());
    }

    size() {
        return this.top;
    }
}