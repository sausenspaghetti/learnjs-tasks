//  https://learn.javascript.ru/function-object#summa-s-proizvolnym-kolichestvom-skobok
'use strict';


function sum(a) {
    let total = a;

    function wrapped(b) {
        total += b;
        return wrapped;
    }
    wrapped[Symbol.toPrimitive] = function(hint) {
        return total;
    }

    return wrapped;
}

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);