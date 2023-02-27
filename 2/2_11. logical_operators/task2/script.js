// https://learn.javascript.ru/logical-operators#chto-vyvedet-alert-ili
'use strict';

// alert() возвращает undefined, приведение в логическому типу дает false
// Выведется 1 (alert(1)), а потом 2.
alert( alert(1) || 2 || alert(3) );
