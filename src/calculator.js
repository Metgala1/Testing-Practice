const Calculator = (function () {
    const add = (a , b) => a + b;
    const div = (a,b) => a / b;
    const mult = (a,b) => a * b;
    const sub = (a,b) => a - b;

    return {add , div , mult, sub}
})()

module.exports = Calculator;