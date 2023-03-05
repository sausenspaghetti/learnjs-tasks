// https://learn.javascript.ru/function-prototype#izmenyaem-prototype
'use strict';

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// 1. Будет выведено true, т.к. прототип rabbit не изменился. У всех 
// следующих кроликов будет undefined
// Rabbit.prototype = {};

// 2. Будет выведено false, т.к. мы изменили свойство внутри прототипа
// (прототипы лежат по ссылке).
// Rabbit.prototype.eats = false; 

// 3. Пытаемся удалить свойство у конкретного объекта. Т.к. его там нет,
// (свойство лежит в prototype) будет выведено true 
// delete rabbit.eats; 

// 4. Будет выведено undefined, т.к. удалили свойство прямо в прототипе.
// delete Rabbit.prototype.eats;


console.log( rabbit.eats ); // true