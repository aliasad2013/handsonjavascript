// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
    let resultObject = {};
    for (let char of str) {
        resultObject[char] = resultObject[char] + 1 || 1;
    }
    let max = 0;
    let maxChar = '';
    for (let property in resultObject) {
        if (resultObject[property] > max) {
            max = resultObject[property];
            maxChar = property;
        }
    }
    return maxChar
}

module.exports = maxChar;