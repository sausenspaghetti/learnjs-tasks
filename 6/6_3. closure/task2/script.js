// https://learn.javascript.ru/closure#obekt-schyotchika
'use strict';

function Counter() {
    let count = 0;
  
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

// Функции up, down - находятся в лексическом окружении Counter
let counter = new Counter();

console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1

