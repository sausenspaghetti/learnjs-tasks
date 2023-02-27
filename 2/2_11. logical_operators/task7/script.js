// https://learn.javascript.ru/logical-operators#proverka-znacheniya-vne-diapazona
'use strict';

let age = 22;

if (age < 14 || age > 90){
    console.log('Age out of range');
}

if (!(age >= 14 && age <= 90)){
    console.log('Age out of range2');
}
