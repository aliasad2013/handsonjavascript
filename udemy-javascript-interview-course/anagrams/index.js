// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    stringA = cleanString(stringA);
    stringB = cleanString(stringB);

    return stringA === stringB;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

//anagrams('A tree, a life, a bench', 'A tree, a fence, a yard');
module.exports = anagrams;


//First Solution
// function anagrams(stringA, stringB) {
//     let stringAMap = buildStringMap(stringA.replace(/[^\w]/g, "").toLowerCase());
//     let stringBMap = buildStringMap(stringB.replace(/[^\w]/g, "").toLowerCase());
//     let result = true;
//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//         return false;
//     }
//     for (let property in stringAMap) {

//         if (!stringBMap.hasOwnProperty(property)) {

//             result = false;
//             break;
//         }
//         if (stringAMap[property] !== stringBMap[property]) {
//             result = false;
//             break;
//         }
//     }

//     return result;
// }

// function buildStringMap(str) {
//     let strMap = {};
//     for (let char of str) {
//         strMap[char] = strMap[char] + 1 || 1;
//     }
//     return strMap;
// }
