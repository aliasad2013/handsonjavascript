var ArrayClass = require('../array-test-bed/array-class');
class ShellSort {
    constructor(numElements) {
        // let numElements = 1000;
        this.dataSet = new ArrayClass(numElements);
        this.dataSet.setData();
        this.gaps = [5, 3, 1];
        //console.log("Before Sort:\n" + this.dataSet.toString());
    }

    sort() {
        let j;
        for (let g = 0; g < this.gaps.length; ++g) {
            for (let i = this.gaps[g]; i < this.dataSet.dataStore.length; ++i) {
                let temp = this.dataSet.dataStore[i];
                for (j = i;
                    j >= this.gaps[g] && this.dataSet.dataStore[(j - this.gaps[g])] > temp;
                    j -= this.gaps[g]) {
                    this.dataSet.dataStore[j] = this.dataSet.dataStore[(j - this.gaps[g])];
                }
                this.dataSet.dataStore[j] = temp;
            }
            // console.log(this.dataSet.toString());
        }
        return this.dataSet.toString();
    }

    sortwithgap() {
        let numOfElements = this.dataSet.dataStore.length;
        let h = 1;
        while (h < numOfElements / 3) {
            h = 3 * h + 1;
        }
        while (h >= 1) {
            for (let i = h; i < numOfElements; i++) {
                for (let j = i;
                    j >= h && this.dataSet.dataStore[j] < this.dataSet.dataStore[j - h];
                    j -= h) {
                    this.dataSet.swap(this.dataSet.dataStore, j, j - h);
                }
            }
            h = (h - 1) / 3;
        }
        return this.dataSet.toString();
    }
}

// let sortObject = new InsertionSort();
// console.log("After Sort:\n" + sortObject.sort());

module.exports = ShellSort;