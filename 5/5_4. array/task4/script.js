'use strict';


function sumInput() {
    let res = [];
    let sum_tot = 0;
    while (true) {
        let next = prompt('Input number');
        if (next === null || !isFinite(next) )
            break;
        else {
            res.push(+next);
            sum_tot += +next;
        }
    }
    return sum_tot;
}

alert( sumInput() );