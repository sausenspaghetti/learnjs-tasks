'use strict';

function ucFirst(str) {
    if (str == '')
        return str
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.slice(1);
    return firstLetter + otherLetters;
}

console.log(ucFirst('sus or ses?') == 'Sus or ses?');
console.log(ucFirst('') == '');
console.log(ucFirst('f') == 'F');
// console.log(ucFirst(null));
// console.log(ucFirst(undefined));
// console.log(ucFirst(124));