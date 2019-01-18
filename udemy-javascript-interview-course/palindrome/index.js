

module.exports = palindrome;


// First Solution
// function palindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str == reversed;
// }
//
//Second Solution
// function palindrome(str) {
//     return str.split('').every((char, index) => {
//         return char == str[str.length - 1 - index];
//     });
// }