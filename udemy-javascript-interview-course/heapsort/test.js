const heapsort = require('./index');

test('heap sort exist', () => {

    expect(typeof heapsort.heapsort_maxheap).toBe('function');
});

test('heap sort sorst unsorted array in ascending order', () => {
    let arr = [7, 6, 5, 4, 3, 2, 1];
    expect(heapsort.heapsort_maxheap(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('heap sort sorst unsorted array in descending order', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    expect(heapsort.heapsort_minheap(arr)).toEqual([7, 6, 5, 4, 3, 2, 1]);
});