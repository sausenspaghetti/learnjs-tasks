// https://learn.javascript.ru/call-apply-decorators#dekorator-debounce
'use strict';


let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


function debounce(func, ms) {
    let isRunning = false;

    return function () {
        if(isRunning) return;
        isRunning = true;
        func.apply(this, arguments);
        setTimeout(() => isRunning = false, ms);
    }

}