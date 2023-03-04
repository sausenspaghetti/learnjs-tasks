// https://learn.javascript.ru/closure#summa-s-pomoschyu-zamykaniy
'use strict';

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log( sum(2)(7) );