const caesarCipher = require('../src/caesarCipher.js')

test('xyz should be abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('Hello, World! should be Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})