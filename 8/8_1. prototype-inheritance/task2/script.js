// https://learn.javascript.ru/prototype-inheritance#algoritm-poiska
'use strict';

let head = {
    glasses: 1
};
  
let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

// pockets → bed → table → head
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined

/*
    Запросы pockets.glasses и head.glasses в среднем выполнятся за 
    одинаковое время, благодаря оптимизации движков JS - движок 
    запоминает где был найден метод/свойство, используя в дальнейших
    вызовах.
*/