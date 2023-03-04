// https://learn.javascript.ru/bind#svoystvo-funktsii-posle-bind
'use strict';

function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

// bind возвращает "экзотический объект", в котором нет свойства test.
let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test );  // undefined
