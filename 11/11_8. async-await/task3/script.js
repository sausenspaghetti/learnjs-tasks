// https://learn.javascript.ru/async-await#vyzovite-asyncfunktsiyu-iz-obychnoy
'use strict';

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}

function f() {
    (async () => {
        let res = await wait();
        console.log(res);
    })();
}

f();