// https://learn.javascript.ru/closure#nezavisimy-li-schyotchiki
'use strict';

function makeCounter() {
    let count = 0;
  
    return function() {
        return count++;
    };
}

// У счетчиков разные независимые лексические окружения, следовательно
// разные переменные count.
let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1
