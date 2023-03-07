// https://learn.javascript.ru/promise-chaining#promisy-sravnite-then-i-catch
'use strict';

function f1 (smth) {
    console.log("It's f1!");
    resolve(new Error('Hi, f1'));
}

function f2 (smth) {
    console.log("It's f2!")
}

let promise = new Promise((resolve, reject) => resolve());

/*
    Будут обрабатываться ошибки, если они появяться в f1, или в promise 
    (f1 при этом не выполнится). Строка с catch(f2) пропустится, если 
    ошибок не было.
*/
promise
    .then(f1)
    .catch(f2);

/*
    Выполнится либо f1, либо f2 - не могут выполниться одновременно.
*/
// promise
//     .then(f1, f2);