// https://learn.javascript.ru/date#skolko-sekund-ostalos-do-zavtra
'use strict';

console.log( getSecondsToTomorrow());


function getSecondsToTomorrow() {
    let d = new Date();
    let tnow = +d;
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 1);

    return Math.round((+d - tnow) / 1000);
}