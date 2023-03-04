// https://learn.javascript.ru/function-object#ustanovka-i-umenshenie-znacheniya-schyotchika
'use strict';

function makeCounter() {
    let count = 1;

    let counter = function () {
        return count++;
    }

    counter.set = (val) => count = val;
    counter.decrease = () => count--; 

    return counter;
}
