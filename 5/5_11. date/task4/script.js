// https://learn.javascript.ru/date#kakoy-den-mesyatsa-byl-mnogo-dney-nazad
'use strict';

let date = new Date(2015, 0, 2);    // Создаем местное или UTC+0  ?

console.log( date );
console.log( getDateAgo(date, 1) );     // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) );     // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) );   // 2, (2 Jan 2014)


function getDateAgo(date, daysAgo) {
    let msecAgo = +date - daysAgo * 24 * 3600 * 1000;
    return new Date(msecAgo);
}