const reverseString = require('./reverseString');

test.skip('reverses single word', () => {
  expect(reverseString('hello')).toEqual('olleh');
});