// https://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-metod-f-defer-ms
'use strict';

function f() {
    console.log("Hello!");
}

// Очень плохая практика
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
} 

f.defer(1000); // выведет "Hello!" через 1 секунду