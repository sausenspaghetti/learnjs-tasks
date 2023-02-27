// https://learn.javascript.ru/number#pochemu-6-35-tofixed-1-6-3
'use strict';

console.log( 6.35.toFixed(16) ); //  6.3499999999999996
// Для корректного округление стоит домножить на 10, и привести к целому.
console.log( Math.round(6.35 * 10) / 10 );