const stringLength = require('./stringLength')

test('length of string', () => {
  expect(stringLength('hello')).toBe(5)
})
test('length of character', () => {
  expect(stringLength('hello')).toBeGreaterThan(0)
  expect(stringLength('hello')).toBeLessThan(10)
})
