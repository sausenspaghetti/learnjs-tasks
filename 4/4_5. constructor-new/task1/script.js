'use strict';

let obj = { 
    name: 'John',
    other : {
        digit : 1,
    } 
};

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log( a === b ); // true
console.log( a ==  b ); // true