var ArrayClass = require('../array-test-bed/array-class');
class BubbleSort {
    constructor(numElements) {
        // let numElements = 1000;
        this.dataSet = new ArrayClass(numElements);
        this.dataSet.setData();
        //console.log("Before Sort:\n" + this.dataSet.toString());
    }

    sort() {
        let numOfElements = this.dataSet.dataStore.length;
        for (let outer = numOfElements; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataSet.dataStore[inner] > this.dataSet.dataStore[inner + 1]) {
                    this.dataSet.swap(this.dataSet.dataStore, inner, inner + 1);
                }
            }
            //console.log("Sorting in Progress:" + this.dataSet.toString());
        }
        return this.dataSet.toString();
    }
}

// let sortObject = new BubbleSort();
// console.log("After Sort:\n" + sortObject.sort());


module.exports = BubbleSort;