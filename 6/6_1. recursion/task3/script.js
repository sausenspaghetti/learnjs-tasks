// https://learn.javascript.ru/recursion#chisla-fibonachchi
'use strict';

// Рекурсия не подойдет
function fib(n) {
    if (n == 1 || n == 0) return 1;

    let prev = 1, next = 1;
    while (--n > 1) {
        [prev, next] = [next, next + prev];
    }
    return next;
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(7));
console.log(fib(77));