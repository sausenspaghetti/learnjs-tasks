// https://learn.javascript.ru/keys-values-entries#summa-svoystv-obekta
'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log( sumSalaries(salaries) ); // 650

function sumSalaries (salaries) {
    // Проверка на нечисловые значения ?
    return Object.values(salaries).reduce((a, b) => +a + +b);
}