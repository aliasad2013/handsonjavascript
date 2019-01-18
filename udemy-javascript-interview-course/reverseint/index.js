function reverseInt(num) {
    let numinstring = num.toString(10);
    numinstring = numinstring.split('').reverse().join('');
    return numinstring = parseInt(numinstring) * Math.sign(num);
}



module.exports = reverseInt;