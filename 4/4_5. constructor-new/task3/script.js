// https://learn.javascript.ru/constructor-new#sozdayte-new-accumulator
'use strict';

function Accumulator(startingValue) {
    this.value = +startingValue;

    this.read = function () {
        let add = +prompt('Next value to add', 0);
        this.value += add;
    }

}

let total = new Accumulator(0);

total.read();
total.read();
total.read();

alert(total.value);