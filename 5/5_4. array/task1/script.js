// https://learn.javascript.ru/array#skopirovan-li-massiv
'use strict';

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
// Массивы, как и все объекты, копируются по ссылке.
// Таким образом, fruits и shoppingCart ссылаются на одну и ту же память
// И длина будет равна 4.
console.log( fruits.length ); 