const vowels = require('./index');

test('vowels function exists', () => {
    expect(typeof vowels).toEqual('function');
});

test('Returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5);
});

test('Returns the number of vowels used', () => {
    expect(vowels('AEIOU')).toEqual(5);
});

test('Returns the number of vowels used', () => {
    expect(vowels('bcdgf')).toEqual(0);
});
