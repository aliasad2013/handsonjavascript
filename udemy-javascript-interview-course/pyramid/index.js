// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, rows = 0, stairs = '') {
    //base case
    if (n === rows) {
        return
    }
    //print the floor logic
    if (stairs.length == (2 * n - 1)) {
        console.log(stairs);
        return pyramid(n, rows + 1);
    }
    if (stairs.length < (n - rows - 1) || stairs.length > (2 * n - 1 - (n - rows))) {
        stairs += " ";
    } else {
        stairs += "#";
    }
    return pyramid(n, rows, stairs);
}

//pyramid(3)
module.exports = pyramid;

//Iterative Solution
// function pyramid(n) {
//     let totalColumns = 2 * n - 1;
//     let substr = "";
//     for (let rows = 0; rows < n; rows++) {
//         substr = "";
//         for (let columns = 0; columns < totalColumns; columns++) {
//             let spacelocation = n - rows;
//             //if (columns < (spacelocation - 1) || columns > (totalColumns - spacelocation)) {
//             if (columns < (n - rows - 1) || columns > (2 * n - 1 - spacelocation)) {
//                 substr += " ";
//             }
//             else {
//                 substr += "#";
//             }
//         }
//         console.log(substr);
//     }
// }
