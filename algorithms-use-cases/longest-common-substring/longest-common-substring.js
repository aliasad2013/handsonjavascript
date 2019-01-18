/** Dynamic Implementation */

function LongestCommonSubstring(word1, word2) {

    let max = 0;
    let index = 0;
    let lcsarr = new Array(word1.length + 1);
    for (let i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1).fill(0);
    }

    for (let i = 1; i <= word1.length; ++i) {
        for (let j = 1; j <= word2.length; ++j) {
            if (word1[i - 1] == word2[j - 1]) {
                lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    console.log(lcsarr);
    let str = "";
    if (max == 0) {
        return "";
    } else {
        for (let i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str.length;
    }

}



console.log(LongestCommonSubstring("abbcc", "dbbcc"));