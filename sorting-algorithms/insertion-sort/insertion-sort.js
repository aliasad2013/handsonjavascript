var ArrayClass = require('../array-test-bed/array-class');
class InsertionSort {
    constructor(numElements) {
        // let numElements = 1000;
        this.dataSet = new ArrayClass(numElements);
        this.dataSet.setData();
        //console.log("Before Sort:\n" + this.dataSet.toString());
    }

    sort() {
        let numOfElements = this.dataSet.dataStore.length;
        let temp, inner;
        for (let outer = 1; outer <= numOfElements - 1; ++outer) {
            temp = this.dataSet.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataSet.dataStore[(inner - 1)] >= temp)) {
                this.dataSet.dataStore[inner] = this.dataSet.dataStore[inner - 1];
                --inner;
            }
            this.dataSet.dataStore[inner] = temp;
            //console.log("Sorting in Progress:" + this.dataSet.toString());
        }
        return this.dataSet.toString();
    }
}

// let sortObject = new InsertionSort();
// console.log("After Sort:\n" + sortObject.sort());

module.exports = InsertionSort;