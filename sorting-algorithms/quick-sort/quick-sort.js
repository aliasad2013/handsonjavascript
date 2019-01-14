//var ArrayClass = require('../array-test-bed/array-class');
class QuickSort {
    constructor(unsortedArray) {
        // let numElements = 1000;
        this.dataSet = unsortedArray;
        //this.dataSet.setData();
        //console.log("Before Sort:\n" + this.dataSet.toString());

        //this.dataSet = this.dataSet.bind(this);
    }

    sort(list) {
        //let self = this;
        //let list = this.dataSet;
        if (list.length == 0) {
            return [];
        }
        var lesser = [];
        var greater = [];
        var pivot = list[0];
        for (var i = 1; i < list.length; i++) {
            if (list[i] < pivot) {
                lesser.push(list[i]);
            } else {
                greater.push(list[i]);
            }
        }
        return this.sort(lesser).concat(pivot, this.sort(greater));
    }
}
let unsortedArray = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
console.log(unsortedArray);

let sortObject = new QuickSort(unsortedArray);
console.log("After Quick Sort:\n" + sortObject.sort(unsortedArray));

module.exports = QuickSort;
