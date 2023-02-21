// https://learn.javascript.ru/date#formatirovanie-otnositelnoy-daty
'use strict';

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );  


function formatDate(date) {
    let now = new Date();
    let msecDiff = +now - +date ; // разница в msec

    // прошло меньше 1 минуты
    if (msecDiff < 1 * 1000) {
        return "прямо сейчас";
    }

    let sec = Math.round(msecDiff / 1000);
    if (sec < 60) {
        return `${sec} сек. назад`
    }

    let min = Math.round(msecDiff / (1000 * 60));
    if (min < 60) {
        return `${min} мин. назад`
    }

    // Форматирование
    let d = {
        day: formatPartDates(date.getDate()),
        month: formatPartDates(date.getMonth() + 1),
        year:  formatPartDates(date.getFullYear()),
        hour:  formatPartDates(date.getHours()),
        min: formatPartDates(date.getMinutes()),
    }
    return `${d.day}.${d.month}.${d.year}, ${d.hour}:${d.min}`
}

function formatPartDates (val) {
    val %= 100;
    if (val >= 10){
        return String(val);
    }
    return '0' + String(val);
}
