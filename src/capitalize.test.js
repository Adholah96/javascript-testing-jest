const capitalLetter = require('./capitalize')

test('capital letter', () => {
  expect(capitalLetter('hello')).toBe('Hello')
})
