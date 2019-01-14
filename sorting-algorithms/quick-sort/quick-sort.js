// class QuickSort {
//     constructor(unsortedArray) {
//         // let numElements = 1000;
//         this.dataSet = unsortedArray;
//         //this.dataSet.setData();
//         //console.log("Before Sort:\n" + this.dataSet.toString());
//     }

function sort(list) {
    if (list.length == 0) {
        return [];
    }
    let lesser = [];
    let greater = [];
    let pivot = list[0];
    for (let i = 0; i < list.length; i++) {
        //console.log("pivot: " + pivot + " current element: " + list[i]);
        if (list[i] < pivot) {
            //  console.log("moving " + list[i] + " to the left");
            lesser.push(list[i]);
        } else {
            //console.log("moving " + list[i] + " to the right");
            greater.push(list[i]);
        }
    }
    return sort(lesser).concat(pivot, sort(greater));
}
//}

let a = [];
for (let i = 0; i < 5; i++) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}
console.log(a);
console.log(sort(a));