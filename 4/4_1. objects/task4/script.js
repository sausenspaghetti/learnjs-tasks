// https://learn.javascript.ru/object#summa-svoystv-obekta
'use strict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(let worker in salaries){
    sum += Number(salaries[worker]);
}

console.log(sum);