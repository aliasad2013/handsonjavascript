function max(a, b) {
    (a > b) ? a : b;
}
function knapsacksolution(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        return knapsacksolution(capacity, size, value, n - 1);
    } else {
        return max(value[(n - 1)] + knapsacksolution(capacity - size[(n - 1)], size, value, (n - 1)),
            knapsacksolution(capacity, size, value, (n - 1)));
    }
}


function knapsacksolution_dynamic(capacity, size, value, n) {
    let k = [];
    for (let i = 0; i <= (capacity + 1); i++) {
        k[i] = [];
    }
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                k[i][w] = 0;
            }
            else if (size[(i - 1)] <= w) {
                k[i][w] = max(value[(i - 1)] + k[(i - 1)][(w - size[i - 1])],
                    k[(i - 1)][w]);
            }
            else {
                k[i][w] = k[(i - 1)][w];
            }
            console.log(k[i][w] + " ");
        }
    }
    return k[n][capacity];
}



let n = 5;
let value = [4, 5, 10, 11, 13];
let size = [3, 4, 7, 8, 9];
let capacity = 16;

console.log(knapsacksolution_dynamic(capacity, size, value, n));