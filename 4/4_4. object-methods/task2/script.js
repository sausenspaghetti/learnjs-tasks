// https://learn.javascript.ru/object-methods#sozdayte-kalkulyator
'use strict';

let calculator = {
    read() {
        this.firstVal  = +prompt('First value is: ', 0);
        this.secondVal = +prompt('Second value is: ', 0);
    },
    sum(){
        return this.firstVal + this.secondVal;
    },
    mul(){
        return this.firstVal * this.secondVal;
    },
    firstVal : 0,
    secondVal : 0,
};

calculator.read();

alert(calculator.sum());
alert(calculator.mul());