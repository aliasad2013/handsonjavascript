class ArrayClass {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
    }

    setData() {
        for (let count = 0; count < this.numElements; count++) {
            this.dataStore[count] = Math.floor(Math.random() * (this.numElements + 1));
        }
    }

    clear() {
        for (let count = 0; count < numElements; count++) {
            this.dataStore[count] = 0;
        }
    }

    insert(element) {
        this.dataStore[this.pos++] = element;
    }

    toString() {
        let retstr = "";
        for (let count = 0; count < this.dataStore.length; ++count) {
            retstr += this.dataStore[count] + " ";
            if (count > 0 && count % 10 == 0) {
                retstr += "\n";
            }
        }
        return retstr;
    }
    swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}

module.exports = ArrayClass;