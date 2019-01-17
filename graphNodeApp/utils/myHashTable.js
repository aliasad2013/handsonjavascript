class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    put(data) {
        let pos = this.simpleHash(data);
        this.table[pos] = data;
    }
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    showDistro() {
        let n = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }
}
function hashTableDemo() {
    let someNames = ["David", "Jennifer", "Donnie", "Raymond",
        "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

    let hTable = new HashTable();
    someNames.forEach((name) => {
        hTable.put(name);
    });

    hTable.showDistro();
}

hashTableDemo();