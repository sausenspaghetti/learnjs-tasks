// https://learn.javascript.ru/date#pokazhite-den-nedeli
'use strict';

let dateDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

function getWeekDay(date) {
    return dateDays[date.getDay()];
}

let date = new Date(2012, 0, 3);        // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"
