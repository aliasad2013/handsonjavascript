
//Third Solution
function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}
reverse('abc')
module.exports = reverse;

//First solution
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed
//     }
//     return reversed;
// }