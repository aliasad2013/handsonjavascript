var palindrome = require('./index.js');

test('palindrome function defined', () => {
    expect(typeof palindrome).toEqual('function');
});

test('aba is palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings " is not palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" is a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" is a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
});
