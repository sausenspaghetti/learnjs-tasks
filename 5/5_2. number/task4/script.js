// https://learn.javascript.ru/number#beskonechnyy-tsikl-po-oshibke
'use strict';

/*
    Для чисел с плавающей точкой не стоит использовать точное сравнение
    из-за ошибок округления. Лучше использовать не точной сравнение, а проверку
    на попадание в некоторый диапазон, близкий к 10.
*/
let i = 0;
let precision = 1e-6;
// while (Math.round(10 * i) / 10 != 10)    // альтернативный вариант
while ( Math.abs(i - 10) > precision ) {
  i += 0.2;
}

console.log(`Hooray! i = ${i}`);