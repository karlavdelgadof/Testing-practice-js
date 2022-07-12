const stringLength = require('./stringLength');

test.skip(`Characters total should be equal to: ${stringLength('love')}`, () => {
  expect(stringLength('love')).toBe(4);
});

test.skip(`Characters total should be equal to: ${stringLength('')}`, () => {
  expect(stringLength('')).toBe('ERROR');
});

test.skip(`Characters total should be equal to: ${stringLength('')}`, () => {
  expect(stringLength('blablablablablabla')).toBe('ERROR');
});