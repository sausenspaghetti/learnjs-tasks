// https://learn.javascript.ru/logical-operators#chto-vyvedet-etot-kod
'use strict';

// Сначала 2 && 3 преобразуется к 3.
// Потом цепочка || пропустит null, и выведется 3. 
// Дальше вычисления закончатся
alert( null || 2 && 3 || 4 );