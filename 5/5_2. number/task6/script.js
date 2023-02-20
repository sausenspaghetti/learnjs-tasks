'use strict';

// min, max - целые
function randon(min, max) {
    // Действительное число в интервале [min, max + 1) - никогда не равно max + 1
    let rnd = Math.random() * (max - min + 1) + min; 

    /*
        Округляем вниз.
        В этом случае вероятность того, что результат будет равен min + i 
        пропорциональна длине следующего интервала: [min + i, min + i + 1).
        Т.е. вероятности равны для любого i.
    */
    return Math.floor(rnd);
}

let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
let ae = 0;  // что-то странное
for(let i = 0; i < 4000000; i++){
    let res = randon(1, 1);
    if (res == 1) 
        a1++;
    else if (res == 2) 
        a2++;
    else if (res == 3) 
        a3++;
    else if(res == 4)
        a4++;
    else
        ae++;
}

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(ae);