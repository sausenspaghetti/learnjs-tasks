// https://learn.javascript.ru/settimeout-setinterval#vyvod-kazhduyu-sekundu
'use strict';

// SetTimeout
function printNumber(from, to) {
    if (from > to) return;
    console.log(from);
    if(from != to) setTimeout(printNumber, 1000, from + 1, to);
}

// SetInterval
function printNumberInterval(from, to) {
    if (from > to) return;

    let timerId = setInterval(() => {
        console.log(from++);
        if(from > to) clearInterval(timerId);
    }, 1000);
}

printNumberInterval(1, 6);