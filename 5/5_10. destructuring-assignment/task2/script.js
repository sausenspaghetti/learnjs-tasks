// https://learn.javascript.ru/destructuring-assignment#maksimalnaya-zarplata
'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary (workers) {
    let topWorker = null; 
    let topSalary = -1;

    for(let [name, salary] of Object.entries(workers) ){
        if(salary > topSalary) {
            topSalary = salary;
            topWorker = name;
        }
    }
    return topWorker;
}


console.log( topSalary(salaries) );
