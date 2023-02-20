// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu
'use strict';

function filterRange(arr, a, b) {
    return arr.filter(item =>  (item >= a && item <= b));
}

let arr1 = [9, 1, 5, 3, 7];
let arr2 = [0, 5, -2, 7, -9, 11];
let arr3 = [34, -118, 0, -633, -88, 14];

console.log(filterRange(arr1, 1, 4));
console.log(arr1);
console.log(filterRange(arr2, 0, 10));
console.log(arr2);
console.log(filterRange(arr3, -200, 15));
console.log(arr3);