// https://learn.javascript.ru/promise-basics#zaderzhka-na-promisah
'use strict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));