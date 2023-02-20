// https://learn.javascript.ru/array-methods#sortirovat-v-poryadke-po-ubyvaniyu
'use strict';

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a );

console.log( arr ); // 8, 5, 2, 1, -10