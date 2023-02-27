// https://learn.javascript.ru/object#umnozhaem-vse-chislovye-svoystva-na-2
'use strict';

// // val must be string 
// // useless
// function isNumeric(val){
//     return String(Math.trunc(Number(val))) == val;
// }

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  
console.log(menu);
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };