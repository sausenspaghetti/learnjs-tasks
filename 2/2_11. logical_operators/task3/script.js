// https://learn.javascript.ru/logical-operators#chto-vyvedet-alert-i
'use strict';

// && ведет вычисления до первого ложного значения.
// alert преобразует результат в строку
// выведется 'null'
alert( 1 && null && 2 );