const calculator = require('../src/calculator.js')

test('1 + 1 should equal 2', () => {
    expect(calculator.add(1,1)).toBe(2)
})

test('3 - 1 should equal 2', () => {
    expect(calculator.sub(3,1)).toBe(2);
})

test('2 x 2 should equal 4', () => {
    expect(calculator.mult(2,2)).toBe(4)
})

test('4 / 2 should equal 2', () => {
    expect(calculator.div(4,2)).toBe(2)
})