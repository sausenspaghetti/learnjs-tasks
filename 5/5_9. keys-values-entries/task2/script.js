// https://learn.javascript.ru/keys-values-entries#podschyot-kolichestva-svoystv-obekta
'use strict';

let user = {
    name: 'John',
    age: 30
};

let agent = {
    name: 'James',
    surname: 'Bond',
    code: '007',
    preference: 'whiskey'
}

console.log( count(user) ); // 2
console.log( count(agent) ); // 4

function count(obj) {
    // return Object.values(obj).reduce(prev => prev + 1, 0); 
    return Object.keys(obj).length;
}