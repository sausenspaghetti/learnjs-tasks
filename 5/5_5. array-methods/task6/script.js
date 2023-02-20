// https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator
'use strict';

function Calculator() {
    this.calculate = function(op_str) {
        // parse string
        let words = op_str.split(' ');
        let l = +words[0];
        let r = +words[2];
        let op = words[1];

        // execute command
        if (this.methodList[op] !== undefined) {
            return this.methodList[op](l, r);
        }

    };

    this.addMethod = addMethod;
    this.methodList = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };
}


function addMethod(name, func) {
    this.methodList[name] = func;
}

let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("7 + 3") == 10);
console.log(powerCalc.calculate("0 + 2") == 2);
console.log(powerCalc.calculate("-2 + 5") == 3);
console.log(powerCalc.calculate("-3 + -5") == -8);
console.log(powerCalc.calculate("-3 - -5") == 2);
console.log(powerCalc.calculate("11 - 2") == 9);
console.log(powerCalc.calculate("0 - 0") == 0);
console.log(powerCalc.calculate("2 ** 3") == 8);
console.log(powerCalc.calculate("3 ** 3") == 27);
console.log(powerCalc.calculate("1 ** 3") == 1);
console.log(powerCalc.calculate("3 * 2") == 6);
console.log(powerCalc.calculate("-4 * -2") == 8);
console.log(powerCalc.calculate("0 * -19") == 0);
console.log(powerCalc.calculate("0 / 1") == 0);
console.log(powerCalc.calculate("34 / 17") == 2);

