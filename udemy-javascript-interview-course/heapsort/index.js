function heapsort_maxheap(dataset) {
    let n = dataset.length
    //Builiding Max Heap in next iteration
    for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
        heapify_maxheap(dataset, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        let temp = dataset[i];
        dataset[i] = dataset[0];
        dataset[0] = temp;
        heapify_maxheap(dataset, i, 0);
    }

    return dataset;
}
function heapify_maxheap(dataset, n, i) {
    let largest = i,
        left = 2 * i + 1,
        right = 2 * i + 2;
    if (left < n && dataset[left] > dataset[largest]) {
        largest = left;
    }
    if (right < n && dataset[right] > dataset[largest]) {
        largest = right;
    }

    if (largest !== i) {
        let temp = dataset[largest];
        dataset[largest] = dataset[i];
        dataset[i] = temp;
        heapify_maxheap(dataset, n, largest);
    }
    return;
}

function heapsort_minheap(dataset) {
    let n = dataset.length;
    for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
        heapify_minheap(dataset, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        let temp = dataset[i];
        dataset[i] = dataset[0];
        dataset[0] = temp;
        heapify_minheap(dataset, i, 0);
    }
    return dataset;
}
function heapify_minheap(dataset, n, i) {
    let smallest = i,
        left = 2 * i + 1,
        right = 2 * i + 2;

    if (left < n && dataset[left] < dataset[smallest]) {
        smallest = left;
    }

    if (right < n && dataset[right] < dataset[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        // let temp = dataset[smallest];
        // dataset[smallest] = dataset[i];
        // dataset[i] = temp;

        /*
        Following is ES6 specific 'Destructuring assignment array matching'
        Chrome, Firefox ONLY.
        */
        [dataset[smallest], dataset[i]] = [dataset[i], dataset[smallest]];


        heapify_minheap(dataset, n, smallest);
    }
    return;
}


module.exports = { heapsort_maxheap, heapsort_minheap };