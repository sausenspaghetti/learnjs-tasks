// https://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo
'use strict';

// 1. цикл
function sumToLoop(n) {
    let tot = 0;
    for(let i = 1; i <= n; i++) tot += i;
    return tot;
}

// 2. рекурсия
function sumToRec(n) {
    return n == 1 ? 1 : n + sumToRec(n - 1);
}

// 3. формула арифметической прогрессии
function sumToAriph(n) {
    return n * (n + 1) / 2;
}

// RangeError -> переполнение стека вызовов
console.log ( sumToRec(100000) );