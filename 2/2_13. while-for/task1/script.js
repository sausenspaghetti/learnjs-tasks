// https://learn.javascript.ru/while-for#poslednee-znachenie-tsikla
'use strict';

let i = 3;
// Последнее значение  1, 
// т.к. i-- - возвращает старое значения.
// К концу последней итерации i == 0
while (i) {
  alert( i-- );
}