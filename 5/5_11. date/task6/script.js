// https://learn.javascript.ru/date#skolko-segodnya-proshlo-sekund
'use strict';


console.log(getSecondsToday());


function getSecondsToday() {
    let d = new Date();
    let tnow = +d;
    d.setHours(0, 0, 0, 0); 
    return Math.round((tnow - +d) / 1000);
}