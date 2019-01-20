const capitalize = require('./index');

test('capitalize function exists', () => {
    expect(typeof capitalize).toEqual('function');
});

test('capitalize the first lettter in every word', () => {
    expect(capitalize('hi there, how is it going?')).toEqual('Hi There, How Is It Going?');
});

test('capitalize the first letter', () => {
    expect(capitalize('i love breakfast at bill miller bbq')).toEqual('I Love Breakfast At Bill Miller Bbq');
});


