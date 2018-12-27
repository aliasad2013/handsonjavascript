import { ThrowStmt } from '@angular/compiler';
import { currentId } from 'async_hooks';
import { setCurrentInjector } from '@angular/core/src/di/injector_compatibility';

class Node {
    next: Node;
    data: String;

    constructor(data: String) {
        this.data = data;
    }

}



export class Llist {
    head: Node;

    constructor() {
        this.head = null;
    }

    append(data: String) {
        if (this.head === null) {
            this.head = new Node(data);
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new Node(data);
    }

    /**
     * @abstract: adding a new head.
     */
    prepend(data: String) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
    }
    find(item) {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.data === item) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        // return currentNode;
    }

    insert(newItem, existingItem) {
        const newNode = new Node(newItem);
        let currentNode = this.find(existingItem);
        if (currentNode == null) {
            console.log('Existing Item cannot be found');
            return;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    DeletewithValue(data: String) {
        if (this.head == null) {
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }


    DisplayAllNodes() {
        let current = this.head;
        let result: String;
        do {
            result += current.data + " ";
            current = current.next;
        } while (current.next != null);
        result += current.data
        return result;
    }
}
