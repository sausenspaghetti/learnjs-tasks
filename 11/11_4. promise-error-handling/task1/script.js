// https://learn.javascript.ru/promise-error-handling#oshibka-v-settimeout
'use strict';


/*
    Оказывается, блок try... catch обрабатывает только синхронные ошибки.
    Блок catch пропустит ошибку и не сможет ее обработать.
*/
new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);