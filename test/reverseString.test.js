const reverseString = require('../src/reverseString.js')

test('string enter should be reversed', () => {
    expect(reverseString('nam')).toBe('man')
})