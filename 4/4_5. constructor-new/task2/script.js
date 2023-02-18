'use strict';

function Calculator() {
    this.firstVal  = 0;
    this.secondVal = 0;

    this.read = function() {
        this.firstVal  = +prompt('First value is: ', 0);
        this.secondVal = +prompt('Second value is: ', 0);
    };

    this.sum = function() {
        return this.firstVal + this.secondVal;
    };

    this.mul = function() {
        return this.firstVal * this.secondVal;
    }
}



let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );