'use strict';


function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) 
      res *= x;
  
    return res;
}

function isNaturals(digit){
    return (digit > 0) && (digit % 1 == 0);
}


let base = +prompt('Input base', 1);
let power = +prompt('Input power', 1);

if(isNaturals(power)){
    alert(pow(base, power));
}
else {
    alert('Only natural power\'s values are supported');
}