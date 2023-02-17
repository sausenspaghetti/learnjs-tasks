'use strict';


// find prime (dummy)
let n = 10;     // range 

for(let candidate = 2; candidate <= n; candidate++){
    // 2 is simple
    let isPrime = true;
    for(let i = 2; i < candidate; i++){
        if(candidate % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime)
        alert(candidate);
}