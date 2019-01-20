// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursive Solution
function steps(n, row = 0, stair = '') {
    //base logic (!IMPORTANT)
    if (n === row) {
        return;
    }
    //business logic
    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }


    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }
    //recursive logic
    steps(n, row, stair);

}
steps(5);
module.exports = steps;

//Iterative Solution (Mine)
// function steps(n) {
//     let resultstring = "";
//     let substring = [];
//     for (let steps = 0; steps < n; steps++) {
//         substring.push(new Array(n).fill(' '));
//         for (let bricks = 0; bricks <= steps; bricks++) {
//             substring[steps][bricks] = "#";
//         }
//         console.log(substring[steps].join(''));
//     }
// }

//Iterative Solution (Stephen Grider)
// function steps(n) {
//     let substr = "";
//     for (let row = 0; row < n; row++) {
//         substr = "";
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 substr += "#"
//             } else {
//                 substr += " "
//             }
//         }
//         console.log(substr);
//     }
// }