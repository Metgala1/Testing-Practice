const capitalize = require('../src/capitalize.js')

test('First letter to be capital later', () => {
    expect(capitalize("attack")).toBe("Attack")
})