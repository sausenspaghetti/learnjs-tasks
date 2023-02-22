// https://learn.javascript.ru/instanceof#strannyy-instanceof
'use strict';

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

// Оператор  instanceof не учитывает саму функцию, а только цепочку
// вызовов obj.prototype -> [[Prototype]] и тд. Результат выполнения true, 
// т.к. A и B prototype ссылаются на один и тот же объект
console.log( a instanceof B ); // true