function fibbonacci_series(n, count) {
    if (count > 9) { return; }
    if (n <= 1)
        return n;

    return fibbonacci_series(n - 1, count + 1) + fibbonacci_series(n - 2, count + 1);
}

console.log(fibbonacci_series(9, 0));