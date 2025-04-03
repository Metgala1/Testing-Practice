const caesarCipher = require('../src/caesarCipher.js')

test('xyz should be abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})