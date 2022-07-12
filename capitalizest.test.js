const capitalize = require('./capitalizest');

test('It is a string', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('It is null', () => {
  expect(capitalize(null)).toEqual('Not a String');
});

test('It is a boolean', () => {
  expect(capitalize(true)).toEqual('Not a String');
});

test('It is a undefined', () => {
  expect(capitalize(undefined)).toEqual('Not a String');
});

test('It is a number', () => {
  expect(capitalize(4)).toEqual('Not a String');
});