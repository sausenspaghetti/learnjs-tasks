'use strict';

let age = 22;

if (age < 14 || age > 90){
    console.log('Age out of range');
}

if (!(age >= 14 && age <= 90)){
    console.log('Age out of range2');
}
