var ArrayClass = require('../array-test-bed/array-class');
class SelectionSort {
    constructor(numElements) {
        // let numElements = 1000;
        this.dataSet = new ArrayClass(numElements);
        this.dataSet.setData();
        //console.log("Before Sort:\n" + this.dataSet.toString());
    }

    sort() {
        let numOfElements = this.dataSet.dataStore.length;
        let min, temp;
        for (let outer = 0; outer <= numOfElements - 2; ++outer) {
            min = outer;
            for (let inner = outer + 1; inner <= numOfElements - 1; ++inner) {
                if (this.dataSet.dataStore[inner] < this.dataSet.dataStore[min]) {
                    min = inner;
                }
            }
            this.dataSet.swap(this.dataSet.dataStore, outer, min);
            // console.log("Sorting in Progress:" + this.dataSet.toString());
        }
        return this.dataSet.toString();
    }
}

// let sortObject = new SelectionSort();
// console.log("After Sort:\n" + sortObject.sort());

module.exports = SelectionSort;