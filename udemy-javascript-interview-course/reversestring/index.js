function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed;
}

module.exports = reverse;

//First solution
// function reverse(str) {
//     return str.split('').reverse().join('');
// }