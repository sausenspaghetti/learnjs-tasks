// https://learn.javascript.ru/native-prototypes#dobavte-funktsiyam-dekoriruyuschiy-metod-defer
'use strict';

function f(a, b) {
    console.log( a + b );
}
Function.prototype.defer = function(ms) {
    let foo = this;
    return function() {
        setTimeout(() => foo.apply(this, arguments), ms);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.