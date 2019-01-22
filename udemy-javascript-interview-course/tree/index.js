// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data))
    }
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    //In BFS we take children of each node and PUSH them into the end of array.
    traverseBF(fn) {
        let arr = [this.root];
        while (arr.length > 0) {
            const node = arr.shift();
            // the dot dot dot operator covert the array elements into a series of indivisual elements
            arr.push(...node.children);
            fn(node);
        }
    }
    //In DFS we take children of each node and UNSHIFT them into the start of array.
    traverseDF(fn) {
        let arr = [this.root];
        while (arr.length > 0) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Tree, Node };