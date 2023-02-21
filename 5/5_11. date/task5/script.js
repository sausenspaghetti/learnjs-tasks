// https://learn.javascript.ru/date#poslednee-chislo-mesyatsa
'use strict';

console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29
console.log( getLastDayOfMonth(2013, 1) ); // 28


function getLastDayOfMonth(year, month) {
    let d = new Date(year, month + 1, 0);   // дни считаются с 1
    return d.getDate();                     // возвращает номер дня от 1 до 31
}