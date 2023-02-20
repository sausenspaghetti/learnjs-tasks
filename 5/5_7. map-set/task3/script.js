// https://learn.javascript.ru/map-set#perebiraemye-klyuchi
'use strict';

let map = new Map();

map.set("name", "John");

// map.keys() -> возвращает итерируемый объект. Для того, чтобы работать с 
// ним как массивом требуется применить метод Array.from. 
let keys = Array.from(map.keys());

// Теперь все работает
keys.push("more");

console.log(keys);