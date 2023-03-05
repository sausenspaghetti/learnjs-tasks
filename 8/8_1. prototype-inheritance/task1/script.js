// https://learn.javascript.ru/prototype-inheritance#rabota-s-prototipami
'use strict';

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log( rabbit.jumps ); // true <- Нашел в rabbit

delete rabbit.jumps;

console.log( rabbit.jumps ); // null <- Нашел в animal, из rabbit был удален

delete animal.jumps;

console.log( rabbit.jumps ); // undefined <- нигде не найдено