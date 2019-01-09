var bubblesort = require('./bubble-sort/bubble-sort');
var selectionsort = require('./selection-sort/selection-sort');
var insertionsort = require('./insertion-sort/insertion-sort');
var shellsort = require('./shell-sort/shell-sort');


function compareBasicSortingAlgorithms(numOfElementsforSorting) {
    let start, stop, elapsed;
    start = new Date().getTime();
    let bubbleSortObject = new bubblesort(numOfElementsforSorting);
    bubbleSortObject.sort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log("Elapsed time for the bubble sort on " + numOfElementsforSorting + " elements is: " + elapsed + " milliseconds.");



    start = new Date().getTime();
    let selectionSortObject = new selectionsort(numOfElementsforSorting);
    selectionSortObject.sort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log("Elapsed time for the selection sort on " + numOfElementsforSorting + " elements is: " + elapsed + " milliseconds.");


    start = new Date().getTime();
    let insertionSortObject = new insertionsort(numOfElementsforSorting);
    insertionSortObject.sort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log("Elapsed time for the Insertion sort on " + numOfElementsforSorting + " elements is: " + elapsed + " milliseconds.");
}

//compareBasicSortingAlgorithms(1000);


let start = new Date().getTime();
let shellsortobj = new shellsort(100000);
shellsortobj.sort();
let stop = new Date().getTime();
let elapsed = stop - start;
console.log("Shellsort with hard-coded gap sequence: " + elapsed + " ms.");


start = new Date().getTime();
shellsortobj.dataSet.clear()
shellsortobj.dataSet.setData();
shellsortobj.sortwithgap();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Shellsort with dynamic gap sequence: " + elapsed + " ms.");

