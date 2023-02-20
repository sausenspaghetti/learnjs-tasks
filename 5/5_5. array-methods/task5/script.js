// https://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv
'use strict';

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)


function copySorted(arr) {
    let res = arr.slice();  // копия массива
    res.sort();
    return res;
}