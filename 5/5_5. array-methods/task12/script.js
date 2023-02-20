// https://learn.javascript.ru/array-methods#ostavit-unikalnye-elementy-massiva
'use strict';

function unique(arr) {
    let uniqVal = [];

    for(let item of arr){
        if ( uniqVal.includes(item) == false ){
            uniqVal.push(item);
        }
    }

    return uniqVal;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
console.log( unique(strings) );     // кришна, харе, :-O