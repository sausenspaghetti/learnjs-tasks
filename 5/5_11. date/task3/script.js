// https://learn.javascript.ru/date#den-nedeli-v-evropeyskoy-numeratsii
'use strict';


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2


function getLocalDay(date) {
    return ( date.getDay() + 6 ) % 7 + 1;
}