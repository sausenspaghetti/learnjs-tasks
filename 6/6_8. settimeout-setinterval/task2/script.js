// https://learn.javascript.ru/settimeout-setinterval#chto-pokazhet-settimeout
'use strict';

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 1000000000; j++) {
  i++;
}
console.log('cool');