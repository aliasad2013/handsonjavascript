// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let arr = [root];
    let count = 0;
    let counterList = [count];
    arr.push('s');


    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            counterList.push(0); count++;
            arr.push('s');
        }
        else {
            counterList[count]++;
            arr.push(...node.children);
        }

    }
    return counterList;
}

module.exports = levelWidth;