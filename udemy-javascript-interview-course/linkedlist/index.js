// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        if (this.head == null) return 0;
        let node = this.head;
        let counter = 0;
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
    }
    getFirst() {

        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }


    removeLast() {
        if (this.head == null) return;
        let previous = this.head;

        if (previous.next == null) {
            this.head = null;
            return;
        }

        let current = previous.next;
        while (current.next !== null) {
            previous = previous.next;
            current = previous.next;
        }

        previous.next = null;
    }
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (this.head == null) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) { return; }
        previous.next = previous.next.next;

    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
    // forEach(fn) {

    //     let node = this.head;

    //     while (node) {
    //         return fn.apply(this, node);
    //     }

    // }

}


module.exports = { Node, LinkedList };