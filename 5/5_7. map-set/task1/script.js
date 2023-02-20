// https://learn.javascript.ru/map-set#filtratsiya-unikalnyh-elementov-massiva
'use strict';

function unique(arr) {
  let s = new Set(arr);
  return Array.from(s);    
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
  console.log( unique(values) ); // Hare,Krishna,:-O