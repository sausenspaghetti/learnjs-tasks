// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste 
'use strict';

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <= b)
            continue;

        arr.splice(i, 1);
        i--;
    }
}

let arr1 = [9, 1, 5, 3, 7];
let arr2 = [0, 5, -2, 7, -9, 11];
let arr3 = [34, -118, 0, -633, -88, 14];

console.log(arr1);
filterRangeInPlace(arr1, 1, 4);
console.log(arr1);
console.log(arr2);
filterRangeInPlace(arr2, 0, 10);
console.log(arr2);
console.log(arr3);
filterRangeInPlace(arr3, -200, 15);
console.log(arr3);