//var ArrayClass = require('../array-test-bed/array-class');
class MergeSort {
    constructor(unsortedArray) {
        // let numElements = 1000;
        this.dataSet = unsortedArray;
        //this.dataSet.setData();
        //console.log("Before Sort:\n" + this.dataSet.toString());
    }

    sort() {
        if (this.dataSet.length < 2) {
            return;
        }

        let step = 1;
        let left, right;
        while (step < this.dataSet.length) {
            left = 0;
            right = step;
            while (right + step <= this.dataSet.length) {
                this.sortArrays(this.dataSet, left,
                    left + step, right, right + step);
                left = right + step;
                right = left + step;
            }
            if (right < Array.length) {
                this.sortArrays(this.dataSet, left,
                    left + step, right, this.dataSet.length);
            }
            step *= 2;
        }
        return this.dataSet;
    }
    sortArrays(dataSet, startLeft, stopLeft, startRight, stopRight) {
        let rightArray = new Array(stopRight - startRight + 1);
        let leftArray = new Array(stopLeft - startLeft + 1);
        let k = startRight;
        for (let i = 0; i < (rightArray.length - 1); ++i) {
            rightArray[i] = dataSet[k];
            ++k;
        }
        k = startLeft;
        for (let i = 0; i < (leftArray.length - 1); ++i) {
            leftArray[i] = dataSet[k];
            ++k;
        }
        rightArray[rightArray.length - 1] = Infinity;
        leftArray[leftArray.length - 1] = Infinity;

        let m = 0;
        let n = 0;
        for (let k = startLeft; k < stopRight; ++k) {
            if (leftArray[m] <= rightArray[n]) {
                dataSet[k] = leftArray[m];
                m++;
            } else {
                dataSet[k] = rightArray[n];
                n++;
            }
        }
        console.log("left array - ", leftArray);
        console.log("right array - ", rightArray);
    }
}
let unsortedArray = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
console.log(unsortedArray);

let sortObject = new MergeSort(unsortedArray);
console.log("After Merge Sort:\n" + sortObject.sort());

module.exports = MergeSort;