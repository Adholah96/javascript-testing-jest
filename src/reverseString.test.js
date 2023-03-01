const reverseString = require('./reverseString')

test('string is reversed', () => {
  expect(reverseString('hello')).toBe('olleh')
})
