// https://learn.javascript.ru/array#summa-vvedyonnyh-chisel
'use strict';


function sumInput() {
    let res = [];
    let sumTot = 0;
    while (true) {
        let next = prompt('Input number');
        if (next === null || !isFinite(next) )
            break;
        else {
            res.push(+next);
            sumTot += +next;
        }
    }
    return sumTot;
}

alert( sumInput() );