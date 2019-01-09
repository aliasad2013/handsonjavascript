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

let shellsortobj = new shellsort(100);
console.log(shellsortobj.sort());


