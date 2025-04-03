const analyzeArray = require('../src/analyzeArray.js')

test('function should take an array and return the average, min , max and length of the array', () => {
    const object = analyzeArray([1,8,3,4,2,6])
    expect(object).toEqual({average: 4, min: 1, max: 8, length: 6})
})