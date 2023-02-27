// https://learn.javascript.ru/while-for#kakie-znacheniya-vyvedet-tsikl-while
'use strict';

// Вывод: 1, 2, 3, 4
// i равно 5 к концу цикла
let i = 0;
while (++i < 5) alert( i );

// Вывод: 1, 2, 3, 4, 5
// i равно 6 к концу цикла
i = 0;
while (i++ < 5) alert( i );