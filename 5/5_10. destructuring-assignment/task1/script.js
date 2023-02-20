// https://learn.javascript.ru/destructuring-assignment#destrukturiruyuschee-prisvaivanie
'use strict';

let user = { name: "John", years: 30 };


let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false