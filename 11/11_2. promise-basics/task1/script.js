// https://learn.javascript.ru/promise-basics#mozhno-li-perevypolnit-promis
'use strict';

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    // resolve(2) будет проигнорирован
    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
